import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../services/service.service';
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

  constructor(private service: ServiceService) { } 

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
      this.service.getMetadata().subscribe(data=>{
        this.Producers = data;
      });
    }
    else{
      this.service.gerMetadataBProduction(str).subscribe(data=>{
        this.Producers = data;
      });
      
    }
  }

  ngOnInit(): void{
    this.genMap("All");
  }

}
