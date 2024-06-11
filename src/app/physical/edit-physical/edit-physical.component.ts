import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Physical } from 'src/app/models/physical';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-physical',
  templateUrl: './edit-physical.component.html',
  styleUrls: ['./edit-physical.component.css']
})
export class EditPhysicalComponent {

  title = 'Details of physical data';

  constructor(public dialogRef: MatDialogRef<EditPhysicalComponent>,
    private route: ActivatedRoute, private service: ServiceService, @Inject(MAT_DIALOG_DATA) public dataForEdit: any){}
  
  PhysicalDetails: Physical = {
    ID: '',
    TA: 0,
    Total_Sulphur: 0,
    Gluc_Fruc: 0,
    Total_phenolics: 0,
    pH: 0,
    Free_Sulphur: 0,
    Ethanol: 0
  }

  showscreen(): void {
    this.PhysicalDetails = this.dataForEdit;
  }
    
  ngOnInit() {
    this.showscreen();
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      alert('Only admins and superusers are allowed.');
    }else {
      this.service.updatePhysical(this.PhysicalDetails).subscribe(data => {
        alert(data);
        this.dialogRef.close();
        this.service.filter('Register click');
        });
    }
  }
  
  onCancel(){
    this.dialogRef.close();
  }
}

