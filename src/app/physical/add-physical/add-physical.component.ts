import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service.service';
import { Physical } from 'src/app/models/physical';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-physical',
  templateUrl: './add-physical.component.html',
  styleUrls: ['./add-physical.component.css']
})
export class AddPhysicalComponent {
  title = "Physical data";

  constructor(private service: ServiceService, private dialogRef: MatDialogRef<AddPhysicalComponent>,
    //  @Inject(MAT_DIALOG_DATA) public data: Metadata
    ) {}

  addPhysicalRequest: Physical = {
    ID: '',
    TA: 0,
    Total_Sulphur: 0,
    Gluc_Fruc: 0,
    Total_phenolics: 0,
    pH: 0,
    Free_Sulphur: 0,
    Ethanol: 0
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm) {
     if(form!=null)form.resetForm();
  }

  onSubmit(form: NgForm) {
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      alert('Only admins and superusers are allowed.');
    }else {
      this.service.addPhysical(this.addPhysicalRequest).subscribe(data=>{
        alert(data);
        form.resetForm();
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
    this.service.filter('Register click');
  }


}
