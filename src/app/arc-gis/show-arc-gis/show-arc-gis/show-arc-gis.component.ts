import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Metadata } from 'src/app/models/metadata';

@Component({
  selector: 'app-show-arc-gis',
  templateUrl: './show-arc-gis.component.html',
  styleUrls: ['./show-arc-gis.component.css']
})
export class ShowArcGisComponent {

  title = 'Details of GIS';

  constructor(public dialogRef: MatDialogRef<ShowArcGisComponent>,  @Inject(MAT_DIALOG_DATA) public dataForView: any){}

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

  ngOnInit(): void{
    this.MetadataDetails = this.dataForView;
  }

}
