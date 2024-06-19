import { Component, ViewChild} from '@angular/core';
import { ServiceService } from '../services/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import {NgForm} from '@angular/forms';

import { MLSlider } from '../models/ml';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent {
  displayedColumns: string[] = ['data1','data2','data3']
  dataSource! :  MatTableDataSource<any>;
  //dataSource: any = [];

  chart1: typeof Highcharts = Highcharts;  
  chart2: typeof Highcharts = Highcharts;  
  chart3: typeof Highcharts = Highcharts;  
  chart4: typeof Highcharts = Highcharts;  
  chartOption1: any;
  chartOption2: any;
  chartOption3: any;
  chartOption4: any;


  toggle = new FormControl('toggle');
  toggleLabel = new FormControl('Show parameters');

  formatLabel(value: number): string {
    // if (value >= 1000) {
    //   return Math.round(value / 1000) + 'k';
    // }
    return `${value}`;
  }

  constructor(private service: ServiceService) {
      this.service.listen().subscribe(data=>{
        this.refreshList();
      })
    }
  
  slider: MLSlider = {
    Cluster_number: 23.0,
    Cluster_weight: 144.0,
    Shoot_number_more_5mm: 12.0,
    Vine_canopy: 0.5,
    Leaf_Area_per_m: 12000.0,
    Berry_weight: 1.78,
  };
  
  onChange() {
    if(this.toggleLabel.value == 'Show parameters') {
      this.toggleLabel.setValue('Hide parameters');
    }
    else{
      this.toggleLabel.setValue('Show parameters');
    }
   }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.onSubmit();
    //this.refreshList();
  }

  refreshList() {

    // this.service.getAIModel().subscribe(data=> {
    //   this.dataSource = new MatTableDataSource(data);
    //   console.log(this.dataSource);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })
  }

  onSubmit() {
    //console.log(this.slider);
    // this.service.getAIModel().subscribe(data=> {
    //   console.log(data);
    // })
    this.service.classifyAIModel(this.slider).subscribe(dt=>{
       const data1 = dt.filter(x=> x.Yield === "Yield per wine")
       const data2 = dt.filter(x=> x.Yield === "Yield per metre")
       const data3 = dt.filter(x=> x.Yield === "Yield per square metre")
       const data4 = dt.filter(x=> x.Yield === "Yield per square metre")

      console.log(data1);
      const qData1 = data1.map((item, index) => ( {
        data: [[item.Quality,item.Value]]
      }));
      const qData2 = data2.map((item, index) => ( {
        //name: [item.Yield],
        // color: 'rgba(119, 152, 191, .5)',
        data: [[item.Quality,item.Value]]
      }));
      const qData3 = data3.map((item, index) => ( {
        //name: [item.Yield],
        // color: 'Red',
        data: [[item.Quality,item.Value]]
      }));
      const qData4 = data4.map((item, index) => ( {
        //name: [item.Yield],
        // color: 'Red',
        data: [[item.Berry_weight_g,item.Value]]
      }));

      this.renderTopLeftChart(qData1);
      this.renderTopRightChart(qData2);
      this.renderBottomLeftChart(qData3);
      this.renderBottomRightChart(qData4);
    })
  }

  renderTopLeftChart(dt:any){
    this.chartOption1 = 
    {
       chart: { type: 'scatter'},//, zoomType: 'xy'},
       title:{ text: 'Based on yield per wine'},
       subtitle: { text: 'Quality/Value'},
       accessibility: {
          announceNewData: {
              enabled: false
          }
       },
      //  series: [
      //   {
      //     //name: 'Quality',
      //     //color: 'rgba(223, 83, 83, .5)',
      //     data: dt1
      //   },
      //   {
      //     //name: 'value2',
      //     //color: 'rgba(119, 152, 191, .5)',
      //     data: dt2
      //   },
      //   {
      //     //name: 'value1',
      //     //color: 'Red',
      //     data: dt3
      //   },
      //  ] 
        // xAxis: { categories:
        //     [
        //       'Yield'
        //     ]},
        // yAxis: { categories:
        //     [
        //       'Value'         
        //     ]},
        series:dt
    }
  }
  renderTopRightChart(dt:any){
    this.chartOption2 = 
    {
      chart: { type: 'scatter'},//, zoomType: 'xy'},
      title:{ text: 'based on yield per metre'},
      subtitle: { text: 'Quality/Value'},
      accessibility: {
        announceNewData: {
          enabled: false
        }
      },
       series: dt
    }
  }
  renderBottomLeftChart(dt:any){
    this.chartOption3 = 
    {
      chart: { type: 'scatter'},//, zoomType: 'xy'},
      title:{ text: 'Based on yield per square metre'},
      subtitle: { text: 'Quality/Value'},
      accessibility: {
        announceNewData: {
          enabled: false
       }
       },
       series: dt
    }
  }
  renderBottomRightChart(dt:any){
    this.chartOption4 = 
    {
      chart: { type: 'scatter'},//, zoomType: 'xy'},
      title:{ text: 'Based on berry weight per square metre'},
      subtitle: { text: 'Quality/Value'},
      accessibility: {
        announceNewData: {
          enabled: false
       }
       },
       series: dt
    }
  }
}
