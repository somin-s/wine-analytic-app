import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../services/service.service';

import { MatTableDataSource } from '@angular/material/table';
import { ShowArcGisComponent } from './show-arc-gis/show-arc-gis/show-arc-gis.component';
import { MatDialog } from '@angular/material/dialog';
// import * as L from 'leaflet';

@Component({
  selector: 'app-arc-gis',
  templateUrl: './arc-gis.component.html',
  styleUrls: ['./arc-gis.component.css']
})
export class ArcGisComponent {

  readonly APIkey = 'edf8fdb7896c4081bf79b2c831a5758e';
  toggle = new FormControl('toggle');
  toggleLabel = new FormControl('Show GIS selector');
  selectedGIS = new FormControl();

  Producers: any = [];
  dataSource! :  MatTableDataSource<any>;
  

  constructor(private service: ServiceService, private dialog: MatDialog) { } 

  ngOnInit(): void{
    //this.genMap("All"); to make it faster

    this.loaded = true;
    const data = [{Vineyard:"Clayvin Single Vineyard",Region:"Marlborough",Producer:"Giesen 13",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/502/321.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Pencarrow",Region:"Wairarapa",Producer:"Palliser 13",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/501/321.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Bendigo",Region:"Central Otago",Producer:"Quartz Reef 13",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/500/321.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"McCrone",Region:"Wairarapa",Producer:"Ata Rangi",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/319.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Clos Henri",Region:"Marlborough",Producer:"Clos Henri",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/319.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Aroha",Region:"Wairarapa",Producer:"Craggy Range",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/318.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Escarpment",Region:"Wairarapa",Producer:"Escarpment",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/317.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Block 3",Region:"Central Otago",Producer:"Felton Road",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/316.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Cornish Point",Region:"Central Otago",Producer:"Felton Road",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/506/316.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Clayvin",Region:"Marlborough",Producer:"Giesen",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/316.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Greystone",Region:"N. Canterbury",Producer:"Greystone",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/504/316.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Roaring Meg",Region:"Central Otago",Producer:"Mt. Difficulty",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/505/320.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Moutere",Region:"Nelson",Producer:"Neudorf",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/503/320.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Pencarrow",Region:"Wairarapa",Producer:"Palliser",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/504/317.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Main Divide",Region:"N. Canterbury",Producer:"Pegasus Bay",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/506/315.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Stoneleigh",Region:"N. Canterbury",Producer:"Pernod Ricard",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/507/315.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Bendigo",Region:"Central Otago",Producer:"Quartz Reef",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/508/315.png?api=edf8fdb7896c4081bf79b2c831a5758e"},
    {Vineyard:"Old Coach Rd",Region:"Nelson",Producer:"Siefried",Layer_ID1:"https://basemaps.linz.govt.nz/v1/tiles/aerial/3857/9/507/316.png?api=edf8fdb7896c4081bf79b2c831a5758e"},];
    this.Producers = data;
    this.dataSource = new MatTableDataSource(data);
  }

  loaded = false;

  onChange() {
    if(this.toggleLabel.value == 'Show filter') {
       this.toggleLabel.setValue('Hide filter');
    }
    else{
       this.toggleLabel.setValue('Show filter');
    }
  }
  
  onChangeGIS(){
    var region: string = this.selectedGIS.value;
    if (region != "All"){
      this.loaded = false;
      this.genMap(region);
      console.log(region);
    }
    else{
      this.genMap("All");
      console.log(region);
    }
  }

  private genMap(str: string): void {

    if (str == "All"){
      // this.service.getMetadata().subscribe(data=>{
      //   this.Producers = data;
      //   this.dataSource = new MatTableDataSource(data);
      // });
      this.ngOnInit()
    }
    else{
      this.loaded = false;
      this.service.gerMetadataBProduction(str).subscribe(data=>{
        this.loaded = true;
        this.Producers = data;
      });
      
    }
  }

  onDetail(producer: string, vinyard: string): void{
    for (var p of this.Producers){
      if (p.Producer === producer && p.Vineyard ===vinyard){
          this.dialog.open(ShowArcGisComponent, {
            height: '90%',
            width: '60%',
            data: p
          });

        }
    }
  }
}
