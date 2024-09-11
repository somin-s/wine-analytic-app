import { Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ServiceService} from 'src/app/services/service.service';
import { FormControl } from '@angular/forms';
import { MlComponent } from '../ml/ml.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
   
   qualitychart: typeof Highcharts = Highcharts;  
   costChart: typeof Highcharts = Highcharts;
   colorchart: typeof Highcharts = Highcharts;
   QPC_chart: typeof Highcharts = Highcharts;


   quality_chartOptions: any;
   cost_chartOptions: any;
   color_chartOptions: any;
   qpc_chartOptions: any;

   //producers:any=[]; to make it faster for drop down list
   producers:any=[["2013G_2018","Clayvin Single Vineyard"],
   ["2013P_2018","Pencarrow"],
   ["2013QR_2018","Bendigo"],
   ["2016AR_2018","McCrone"],
   ["2016CH_2018","Clos Henri"],
   ["2016CR_2018","Aroha"],
   ["2016E_2018","Escarpment"],
   ["2016FRB3_2018","Block 3"],
   ["2016FRCP_2018","Cornish Point"],
   ["2016G_2018","Clayvin"],
   ["2016GS_2018","Greystone"],
   ["2016MtD_2018","Roaring Meg"],
   ["2016N_2018","Moutere"],
   ["2016P_2018","Pencarrow"],
   ["2016PB_2018","Main Divide"],
   ["2016PR_2018","Stoneleigh"],
   ["2016QR_2018","Bendigo"],
   ["2016S_2018","Old Coach Rd"]];
   
   toggle = new FormControl('toggle');
   toggleLabel = new FormControl('Show parameters');

   selectedQ = new FormControl('');
   selectedC = new FormControl('');
   selecteP = new FormControl('');
   // selecteProcedure: MetadataList = {
   //    ID : '',
   //    Vineyard :  ''
   // };
   //selectedViticulture = new FormControl('');


   constructor(private service: ServiceService) {   
   }
   onChange() {
      if(this.toggleLabel.value == 'Show parameters') {
         this.toggleLabel.setValue('Hide parameters');
      }
      else{
         this.toggleLabel.setValue('Show parameters');
      }
   }

   onChangeQuality() {
      this.loaded = false;
      var PD: any = this.selectedQ.value;
      if (PD != "Qualities")
      {
         this.service.getForGraph(PD).subscribe(dt=> {
            this.loaded = true;
            var qData = dt.map((item, index) => ( {
               name: [item.Vineyard],
               data: [item.Quality/item.DIV]
            }));
            this.QualityChart(qData,"Qualities based on "+PD);
         })
      }
      else
      {
         this.retrieveData("Qualities");
      }
   }

   onChangeCost() {
      this.loaded = false;
      var CD: any = this.selectedC.value;
      if (CD != "Costs")
      {
         this.service.getForGraph(CD).subscribe(dt=>{
            this.loaded = true;
            var cData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Cost/item.DIV]
            }));
            this.CostChart(cData,"Costs based on "+CD);
            })
      }
      else
      {
         this.retrieveData("Costs");
      }
   }
   
   onChangeColor() {
      this.loaded = false;
      var Pro: any = this.selecteP.value;
      this.retrieveDataColor(Pro);
   }

   ngOnInit(): void{
      //this.retrieveProducerList(); to make it faster for dropdown lsit

      //this.retrieveData("init");
      this.retrieveDataInit();
      
      //this.retrieveDataColor("init");
      this.retrieveDataColorInit();
   }
   loaded = false;

   retrieveProducerList(){
      this.service.getMetadata().subscribe(dt=>{
         this.producers = dt;
      });


   }
   //for init
   retrieveDataInit() {
      this.loaded = true;

      var qData = [{name:["Clayvin Single Vineyard"],data:[5.980]},{name:["Pencarrow"],data:[5.430]},{name:["Bendigo"],data:[5.300]},
      {name:["McCrone"],data:[5.020]},{name:["Clos Henri"],data:[5.700]},{name:["Aroha"],data:[6.550]},
      {name:["Escarpment"],data:[6.090]},{name:["Block 3"],data:[6.350]},{name:["Cornish Point"],data:[6.520]},
      {name:["Clayvin"],data:[5.520]},{name:["Greystone"],data:[5.890]},{name:["Roaring Meg"],data:[6.070]},
      {name:["Moutere"],data:[6.020]},{name:["Pencarrow"],data:[6.230]},{name:["Main Divide"],data:[6.340]},
      {name:["Stoneleigh"],data:[4.720]},{name:["Bendigo"],data:[5.720]},{name:["Old Coach Rd"],data:[4.820]}]
      this.QualityChart(qData,"Qualities");
      
      var cData = [{name:["Clayvin Single Vineyard"],data:[63]},{name:["Pencarrow"],data:[26]},{name:["Bendigo"],data:[79]},
      {name:["McCrone"],data:[82]},{name:["Clos Henri"],data:[44]},{name:["Aroha"],data:[140]},
      {name:["Escarpment"],data:[52]},{name:["Block 3"],data:[102]},{name:["Cornish Point"],data:[76]},
      {name:["Clayvin"],data:[63]},{name:["Greystone"],data:[43]},{name:["Roaring Meg"],data:[28]},
      {name:["Moutere"],data:[67]},{name:["Pencarrow"],data:[26]},{name:["Main Divide"],data:[22]},
      {name:["Stoneleigh"],data:[15]},{name:["Bendigo"],data:[79]},{name:["Old Coach Rd"],data:[13]}]
      this.CostChart(cData,"Costs");
      
      var qpcData = [{name:["Clayvin Single Vineyard"],data:[63/5.980]},{name:["Pencarrow"],data:[26/5.430]},{name:["Bendigo"],data:[79/5.300]},
      {name:["McCrone"],data:[82/5.020]},{name:["Clos Henri"],data:[44/5.700]},{name:["Aroha"],data:[140/6.550]},
      {name:["Escarpment"],data:[52/6.090]},{name:["Block 3"],data:[102/6.350]},{name:["Cornish Point"],data:[76/6.520]},
      {name:["Clayvin"],data:[63/5.520]},{name:["Greystone"],data:[43/5.890]},{name:["Roaring Meg"],data:[28/6.070]},
      {name:["Moutere"],data:[67/6.020]},{name:["Pencarrow"],data:[26/6.230]},{name:["Main Divide"],data:[22/6.340]},
      {name:["Stoneleigh"],data:[15/4.720]},{name:["Bendigo"],data:[79/5.720]},{name:["Old Coach Rd"],data:[13/4.820]}]
      this.QPCChart(qpcData);
   }

   retrieveDataColorInit() {
      this.loaded = true;

      var colorData = [{data:[['Yellow',43.293],['Red',45.606],['Blue',11.101]], colors:["#F9E79F","#CD6155","#2980B9"]}]
      this.ColorChart(colorData, "Clayvin Single Vineyard")
   }
   //end init

   retrieveData(sh: String) {
         this.service.getMetadata().subscribe(dt=>{
            this.loaded = true;
            var qData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Quality]
            }));
            var cData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Cost]
            }));
            var qpcData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Quality/item.Cost]
            }));


            if(sh == "init"){
               this.QualityChart(qData,"Qualities");
               this.CostChart(cData,"Costs");
               this.QPCChart(qpcData);
            }
            else if (sh == "Qualities"){
               this.QualityChart(qData,"Qualities");
            }
            else if (sh == "Costs"){
               this.CostChart(cData,"Costs");
            }
         });
   }
   
   retrieveDataColor(sh: string)
   {
      var ID: string
      if(sh == "init"){
         ID = "2013G_2018";
      }
      else{
         ID = sh;
      }

      this.service.getColorList(ID).subscribe(dt=>{
         this.loaded = true;
         var colorData = dt.map((item)=> ({
            name: [item.Vineyard],
            data: [['Yellow',item.Yellow],['Red',item.Red],['Blue',item.Blue]],
            colors: ["#F9E79F","#CD6155","#2980B9"]
         }));
         this.ColorChart(colorData, dt[0].Vineyard);
      });
   }

   public QualityChart(dt: any, str: String){

      this.quality_chartOptions = 
      {
         chart: { type: 'column'},
         title: { text: 'Wind Qualities'},
         //subtitle:{ text: 'Keep on working'},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         xAxis: { categories:
              [
                str         
              ]},
         series: dt
      }
   }
   public CostChart(t: any, str: String){
      this.cost_chartOptions = 
      {
         chart: { type: 'column'},
         title: { text: 'Costs'},
         //subtitle:{ text: 'Keep on working'},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         xAxis: { categories:
              [
                  str         
              ]},
         series: t
      }
   }
   public ColorChart(t:any, str: String){
      this.color_chartOptions = 
      {
         chart: { type: 'pie'},
         title: { text: 'Berry colors'},
         subtitle:{ text: str},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         series: t
      }
   }
   public QPCChart(t: any){
      this.qpc_chartOptions = 
      {
         chart: { type: 'bar'},
         title: { text: 'Quality/Cost'},
         //subtitle:{ text: 'Keep on working'},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         xAxis: { categories:
              [
                'Quality/Cost'  
              ]},
         series: t
      }
   }

}
