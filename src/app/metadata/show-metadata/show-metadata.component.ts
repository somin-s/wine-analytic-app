import {Component, ViewChild} from '@angular/core';
import {Metadata} from 'src/app/models/metadata';
import { ServiceService } from 'src/app/services/service.service';

import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {AddMetadataComponent} from 'src/app/metadata/add-metadata/add-metadata.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditMetadataComponent } from '../edit-metadata/edit-metadata.component';


@Component({
  selector: 'app-show-metadata',
  templateUrl: './show-metadata.component.html',
  styleUrls: ['./show-metadata.component.css']
})


export class ShowMetadataComponent {
  displayedColumns: string[] = ['ID','Producer','Vineyard', 'Region', 'Uses','Harvest', 'Yield','Viticulture', 'Options'];
  dataSource! :  MatTableDataSource<any>;

  constructor(private service: ServiceService,private dialog:MatDialog) {
   //for refresh screen after  add or edit/delete
    this.service.listen().subscribe(data=>{
      this.refeshList();
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(){
    this.refeshList();    
  }
  refeshList() {
    this.service.getMetadata().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);
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
    this.dialog.open(AddMetadataComponent,dialogConfig);

   }

  onEdit(meta: Metadata){
    //  console.log(meta.ID);
    //  const dialogConfig = new MatDialogConfig();
    //  dialogConfig.disableClose = true;
    //  dialogConfig.autoFocus = true;
    //  dialogConfig.width = "70%";
    this.dialog.open(EditMetadataComponent, {
      height: '90%',
      width: '60%',
      data: meta
    });

   }

  onDelete(id: string){
    if (localStorage.getItem('session') == null || localStorage.getItem('session') == "nonMember"){
      alert('Only admins and superusers are allowed.');
    }else {
      if(confirm('Do you persist in deleting: '+id+'?'))
      this.service.deleteMetadata(id).subscribe(data=>{
        alert(data);
        this.refeshList();
      })
    }
    }
  }
