import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ArcGisComponent} from './arc-gis/arc-gis.component'
import { DatasetComponent } from './dataset/dataset.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info/info.component';

const routes: Routes = [
  {path: '',component: DashboardComponent},
 //{path: 'login',component: LoginComponent},
  {path: 'ArcGis',component: ArcGisComponent},
  {path: 'DataSet',component: DatasetComponent},
  {path: 'login',component: LoginComponent},
  {path: 'Info',component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
