import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Countries } from '../model/country';
import { States } from '../model/states';

@Injectable({
  providedIn: 'root'
})
export class CoutryService {

  API: string="http://localhost:3000/countries";
  API1: string="http://localhost:3000/states";
  API2: string="http://localhost:3000/cities";
  constructor(
   private httpClient: HttpClient
  ) { }

  getAllCountry(): Observable<Countries[]>{
    return this.httpClient.get<Countries[]>(this.API);
  }
  getStates(countyId: number):any {
    return this.httpClient.get(`${this.API1}/?countyId=${countyId}`)
      
  }
  getAllCity(statesID: number):any {
    return this.httpClient.get(`${this.API2}/?statesId=${statesID}`)
      
  }

  getByIdCity(statesID: any):Observable<City> {
    return this.httpClient.get<City>(`${this.API2}/${statesID}`)
      
  }
  getStateById(id: any):Observable<States>{
    return this.httpClient.get<States>(this.API1 +"/" +id);
  
  }
  getCountryById(id: any):Observable<Countries>{
    return this.httpClient.get<Countries>(this.API +"/" +id);
  
  }
  getCityById(id: any): Observable<City>{
    return this.httpClient.get<City>(this.API2+"/"+id);
  }
  
}