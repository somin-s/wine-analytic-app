import { Component, ViewChild} from '@angular/core';
import { Physical } from 'src/app/models/physical';
import { ServiceService } from 'src/app/services/service.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddPhysicalComponent } from '../add-physical/add-physical.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditPhysicalComponent } from '../edit-physical/edit-physical.component';

@Component({
  selector: 'app-show-physical',
  templateUrl: './show-physical.component.html',
  styleUrls: ['./show-physical.component.css']
})
export class ShowPhysicalComponent
{

  displayedColumns: string [] = ['ID','TA','Total_Sulphur','Gluc_Fruc','Total_phenolics','pH','Free_Sulphur','Ethanol', 'Options'];
  dataSource! :  MatTableDataSource<any>;

  constructor(private service: ServiceService, 
  private dialog:MatDialog) {
    this.service.listen().subscribe(data=>{
      this.refreshList();
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    console.log(localStorage.getItem('session'));
    this.refreshList();    
  }
  refreshList() {
    this.service.getPhysicalData().subscribe(data=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "90%";
    dialogConfig.width = "60%";
    this.dialog.open(AddPhysicalComponent,dialogConfig);
   }

  onEdit(physical: Physical){
    this.dialog.open(EditPhysicalComponent, {
      height: '90%',
      width: '60%',
      data: physical
    });
   }

  onDelete(id: string){

    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      alert('Only admins and superusers are allowed.');
    }else {
      if(confirm('Do you persist in deleting: '+id+'?'))
      this.service.deletePhysical(id).subscribe(data=>{
        alert(data);
        this.refreshList();
      })
    }
   }

}
