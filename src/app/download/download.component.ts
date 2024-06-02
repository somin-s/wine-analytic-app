import { Component } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { ServiceService } from '../services/service.service';
import { FileSaverService } from 'ngx-filesaver';
import * as XLSX from 'xlsx'



export interface elementData {
  Position: number;
  Dataset: string;
  Description: string;
}
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})


export class DownloadComponent {


  displayedColumns: string[] = ['Position', 'Dataset', 'Description', 'Options'];
  dataSource!: MatTableDataSource<any>;
  dataSource1!: MatTableDataSource<any>;
  constructor(private service: ServiceService, private fileSaver: FileSaverService) {}

  element_Data: elementData[] = [
    {Position: 1, Dataset: 'Metadata', Description: 'This data is detailed on harvesting, producers and etc.'},
    {Position: 2, Dataset: 'Physical_Data', Description: 'This data is detailed on physical properties of the berry.'},
    {Position: 3, Dataset: 'AromaLincoln', Description: 'This data is detailed on the aroma of 18 bottles of wine, from different regions.'},
    {Position: 4, Dataset: 'Berry_OD', Description: 'This data contains the berry OD, based on different chemical characters'},
    {Position: 5, Dataset: 'Color_Lincoln', Description: 'This data give details of the colors of berry from different regions '},
    {Position: 6, Dataset: 'Comp_Kea_Berry_Vs_AWRI', Description: 'This data is detailed on the wine composition such a water, ethanol, pH and etc.'},
    {Position: 7, Dataset: 'Oenological_analysis_PFR', Description: 'Oenological analysis, rigorous quality control that guarantees that the wine is safe and of the highest quality.'},
  ];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.element_Data);
  }


  onDowload(strTable: string): void {
    // const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    // const EXCEL_EXTENSION = '.xlsx';
    // const fileName = strTable+".xlsx";
    //const dt:any;
    //this.http.get(this.APIUrl+'forDownloadData?strTable='+strTable).subscribe(data=> {
    if(strTable =="Metadata"){

      this.Metadata(strTable);

    }else if(strTable =="Physical_Data"){

      this.Physical_Data(strTable);

    }else if(strTable =="AromaLincoln"){
      
      this.AromaLincoln(strTable)

    }else if(strTable =="Berry_OD"){

      this.Berry_OD(strTable);

    }else if(strTable =="Color_Lincoln"){

      this.Color_Lincoln(strTable);

    }else if(strTable =="Comp_Kea_Berry_Vs_AWRI"){

      this.Comp_Kea_Berry_Vs_AWRI(strTable);

    }else if (strTable =="Oenological_analysis_PFR") {

      this.Oenological_analysis_PFR(strTable);
    }
  }

  Metadata(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getMetadata().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }

  Physical_Data(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getPhysicalData().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }

  AromaLincoln(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getAromaLincoln().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }

  Berry_OD(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getBerry_OD().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }

  Color_Lincoln(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getColor_Lincoln().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }

  Comp_Kea_Berry_Vs_AWRI(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getComp_Kea_Berry_Vs_AWRI().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }
  
  Oenological_analysis_PFR(strTable: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const fileName = strTable+".xlsx";

    this.service.getOenological_analysis_PFR().subscribe(data=>{
      const workSheet = XLSX.utils.json_to_sheet(data);
      const workBook = {
        Sheets:{
          'Sheet1':workSheet
        },
          SheetNames: ['Sheet1']
      }
      const excelBuffer = XLSX.write(workBook,{bookType:'xlsx', type: 'array'});
      const blobData = new Blob([excelBuffer],{type: EXCEL_TYPE});
      this.fileSaver.save(blobData,fileName);
    })
  }


}
