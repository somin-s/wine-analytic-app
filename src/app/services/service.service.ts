import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Metadata } from '../models/metadata';
import { MetadataGraph} from '../models/metadata';
import { MetadataGraphColor } from '../models/metadata';
import { Physical } from '../models/physical';
import { AromaLincoln } from '../models/download';
import { Berry_OD } from '../models/download';
import { Color_Lincoln } from '../models/download';
import { Comp_Kea_Berry_Vs_AWRI } from '../models/download';
import { Oenological_analysis_PFR } from '../models/download';
import { User } from '../models/user';
import { ML } from '../models/ml';
import { MLSlider } from '../models/ml';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //production = true;
  //readonly APIUrl = "http://localhost:5277/api/Pinot/";
  //readonly APIUrl = "https://pinotnz.azurewebsites.net/api/Pinot/";

  private APIUrl = environment.APIUrl;
  private APIUrlFlask = environment.APIUrlFlask;

  constructor(private http:HttpClient) { }



 //get ML model result
  getAIModel(): Observable<ML[]> {
    return this.http.get<ML[]>(this.APIUrlFlask+"getModel");
  }
  // getAIModel(){
  //   return this.http.get(this.APIUrlFlask+"getModel");
  // }
  classifyAIModel(classifyParameter:MLSlider): Observable<any[]> {
    return this.http.post<any[]>(this.APIUrlFlask+"ModelClassify", classifyParameter);
  }
    
  //#region for test
  getUser():  Observable<User[]> {
    const headers= new HttpHeaders().set('content-type', 'application/json')
    //.set('Access-Control-Allow-Credentials','true')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Accept')
    .set('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT, DELETE');
    

    return this.http.get<User[]>(this.APIUrl+'GetUserPWD', {headers: headers, withCredentials: true});
  }

  //#region for Metadata
  getMetadata(): Observable<Metadata[]> {
    return this.http.get<Metadata[]>(this.APIUrl+'GetMetadata');
  }

  addMetadata(addMetadataRequest:Metadata): Observable<Metadata> {
    return this.http.post<Metadata>(this.APIUrl+'AddMetadata', addMetadataRequest);
  }

  updateMetadata(updateMetadataRequest: Metadata): Observable<Metadata>{
    return this.http.put<Metadata>(this.APIUrl+'UpdateMetadata', updateMetadataRequest);
  }

  deleteMetadata(deletedID: string): Observable<Metadata>{
    return this.http.delete<Metadata>(this.APIUrl+'DeleteMetadata?condition='+deletedID);
  }



  getForGraph(cd: string) {
    return this.http.get<MetadataGraph[]>(this.APIUrl+'GetMetadata_graph?condition='+cd);
  }

  getColorList(cd: string) {
    return this.http.get<MetadataGraphColor[]>(this.APIUrl+'GetMetadata_graphColor?condition='+cd);
  }
  
  gerMetadataBProduction(cd: string) {
    return this.http.get<Metadata[]>(this.APIUrl+'GetMetadata_production?condition='+cd);
  }
//#endregion

//#region for Physical data

  getPhysicalData(): Observable<Physical[]> {
    return this.http.get<Physical[]>(this.APIUrl+'GetPhysicaldata');
  }

  addPhysical(addPhysicalRequest:Physical): Observable<Physical> {
    return this.http.post<Physical>(this.APIUrl+'AddPhysical', addPhysicalRequest);
  }

  updatePhysical(updatePhysicalRequest: Physical): Observable<Physical>{
    return this.http.put<Physical>(this.APIUrl+'UpdatePhysical', updatePhysicalRequest);
  }

  deletePhysical(deletedID: string): Observable<Metadata>{
    return this.http.delete<Metadata>(this.APIUrl+'DeletePhysical?condition='+deletedID);
  }

//#endregion


//#region for downloading
  //Matadata get from the metadata and physical methods, as defined

  getAromaLincoln(): Observable<AromaLincoln[]> {
    return this.http.get<AromaLincoln[]>(this.APIUrl+'GetAromaLincoln');
  }

  getBerry_OD(): Observable<Berry_OD[]> {
    return this.http.get<Berry_OD[]>(this.APIUrl+'GetBerry_OD');
  }

  getColor_Lincoln(): Observable<Color_Lincoln[]> {
    return this.http.get<Color_Lincoln[]>(this.APIUrl+'GetColor_Lincoln');
  }

  getComp_Kea_Berry_Vs_AWRI(): Observable<Comp_Kea_Berry_Vs_AWRI[]> {
    return this.http.get<Comp_Kea_Berry_Vs_AWRI[]>(this.APIUrl+'GetComp_Kea_Berry_Vs_AWRI');
  }

  getOenological_analysis_PFR(): Observable<Oenological_analysis_PFR[]> {
    return this.http.get<Oenological_analysis_PFR[]>(this.APIUrl+'GetOenological_analysis_PFR');
  }
//#endregion

//#region action when closing button
  private _listeners = new Subject<any>();

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  filter(filterby: string) {
    this._listeners.next(filterby);
  }
//#endregion

}
