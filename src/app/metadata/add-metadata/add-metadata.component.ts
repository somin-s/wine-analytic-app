import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/services/service.service';
import { Metadata } from 'src/app/models/metadata';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-metadata',
  templateUrl: './add-metadata.component.html',
  styleUrls: ['./add-metadata.component.css']
})
export class AddMetadataComponent {
  title = 'Adding Metadata';

  constructor(private service: ServiceService, private dialogRef: MatDialogRef<AddMetadataComponent>,
      //  @Inject(MAT_DIALOG_DATA) public data: Metadata
      ) {}

  addMetadataRequest: Metadata = {
    ID: '',
    Producer_Abbrev: '',
    Producer: '',
    Vineyard: '',
    Vintage: '',
    Region: '',
    Cost: 0,
    Uses: '',
    Closure: '',
    Harvest: '',
    Yield: '',
    Production: '',
    Viticulture: '',
    Quality: 0,
    Layer_ID: '',
    Layer_ID1: '',
    DIV: 0,
  };

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
      this.service.addMetadata(this.addMetadataRequest).subscribe(data=>{
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
