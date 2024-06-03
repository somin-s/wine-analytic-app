import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginValid = true;
  public nonMember = true;

  private APIUrl = environment.APIUrl;

  constructor (private service: ServiceService, private http:HttpClient) {}


  loginForm = new FormGroup({
    EMAIL: new FormControl('',[Validators.required, Validators.email]),
    PASSWORD: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });


  dtUserPWD:any = [];
  displayEmail = " Admin";

  refreshScreen() {
    if (localStorage.getItem('session') != null){
      this.nonMember = false;
      this.displayEmail = ""+localStorage.getItem('session');
    }
  }


  ngOnInit() {
    this.refreshScreen();
  }

  loginSubmited() {
    var strEmail = this.Email.value;
    var strPWD = this.PWD.value;
    var formData = new FormData();

    formData.append("email",strEmail);
    formData.append("pwd",strPWD);
    

    this.http.post(this.APIUrl+'GetUserPWD',formData).subscribe(dt=>{
      console.log("email:"+dt);
    //this.service.getUser().subscribe(dt=>{
      this.dtUserPWD = dt;
        var len = this.dtUserPWD.length;

        if (len==1) {
          this.loginValid = true;
          this.nonMember = false;

          localStorage.setItem('session', strEmail);
          this.refreshScreen();
          window.location.reload();
          //this.redirectScreen();
        }
        else {
          this.loginValid = false;
          localStorage.setItem('session', "nonMember");
        }
    });
    
    this.http.get(this.APIUrl+'GetUserPWD').subscribe(dt=>{
      console.log("email:"+dt);
    //this.service.getUser().subscribe(dt=>{
      this.dtUserPWD = dt;
        var len = this.dtUserPWD.length;

        if (len==1) {
          this.loginValid = true;
          this.nonMember = false;

          localStorage.setItem('session', strEmail);
          this.refreshScreen();
          window.location.reload();
          //this.redirectScreen();
        }
        else {
          this.loginValid = false;
          localStorage.setItem('session', "nonMember");
        }
    });
  }

  logoutSubmited() {
    this.nonMember = true;
    localStorage.removeItem('session');
    window.location.reload();
    //this.refreshScreen();
  }


  get Email(): FormControl {
    return this.loginForm.get('EMAIL') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('PASSWORD') as FormControl;
  }

}
