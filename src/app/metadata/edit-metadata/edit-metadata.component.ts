import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Metadata } from 'src/app/models/metadata';
import {NgForm} from '@angular/forms';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-metadata',
  templateUrl: './edit-metadata.component.html',
  styleUrls: ['./edit-metadata.component.css']
})
export class EditMetadataComponent {
  title = 'Details of metadata';
  // dataSource!: MatTableDataSource<any>;


  constructor(public dialogRef: MatDialogRef<EditMetadataComponent>,
    private route: ActivatedRoute, private service: ServiceService, @Inject(MAT_DIALOG_DATA) public dataForEdit: any){}
  
  MetadataDetails: Metadata = {
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
      DIV:0
    };
  
  options = [
    {id: 2013, display: "2013"},
    {id: 2016, display: "2016"},
    {id: 2019, display: "2019"},
    {id: 2023, display: "2023"},
    {id: 2025, display: "2025"},
    {id: 2028, display: "2028"},
    {id: 2031, display: "2031"}
  ]

  public radios: any = [
    {id: "Low",bool: false},
    {id: "High",boo: false}
  ];
  //radios = [{id: "Low", check: true}, {id: "High", check: true}]
    
  ngOnInit(): void{
    this.MetadataDetails = this.dataForEdit;
    console.log(this.MetadataDetails);
    // if(this.radios[0][0] == this.dataForEdit.Production) this.radios[0][0] = true;
    // else this.radios[0][1] = true;
    // console.log(this.radios);
  }

  onSubmit(form: NgForm){
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      alert('Only admins and superusers are allowed.');
    }else {
      this.service.updateMetadata(this.MetadataDetails).subscribe(data => {
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
