import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as amplitude from '@amplitude/analytics-browser';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  readonly url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  trackpostEvent(eventName: string) {
    amplitude.track(eventName); 
  }

  addPatient(Patient:any):Observable<any>{
    this.trackpostEvent('postpatientEvent'); 
    return this.http.post(this.url+"Patient",Patient);
  }
  addProvider(Provider:any):Observable<any>{
    this.trackpostEvent('postproviderEvent'); 
      return this.http.post(this.url+"Provider",Provider);
   
    }
}

