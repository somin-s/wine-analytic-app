import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MetadataComponent } from './metadata/metadata.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMetadataComponent } from './metadata/add-metadata/add-metadata.component';

import { ShowMetadataComponent } from './metadata/show-metadata/show-metadata.component';
import { EditMetadataComponent } from './metadata/edit-metadata/edit-metadata.component';
import { ArcGisComponent } from './arc-gis/arc-gis.component';
import { PhysicalComponent } from './physical/physical.component';
import { AddPhysicalComponent } from './physical/add-physical/add-physical.component';
import { EditPhysicalComponent } from './physical/edit-physical/edit-physical.component';
import { ShowPhysicalComponent } from './physical/show-physical/show-physical.component';
import { DatasetComponent } from './dataset/dataset.component';
import { DownloadComponent } from './download/download.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddMetadataComponent,
    MetadataComponent,
    ShowMetadataComponent,
    EditMetadataComponent,
    PhysicalComponent,
    AddPhysicalComponent,
    EditPhysicalComponent,
    ShowPhysicalComponent,
    DatasetComponent,
    DownloadComponent,
    LoginComponent,
    ArcGisComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,   
    FormsModule,
    HighchartsChartModule,

    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
     
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,

    
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
