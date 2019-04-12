import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }
  getdata() : Observable <any>{
  return  this.httpClient.get <any>('https://cors.io/?http://api.myglamapp.pl/api/categories?language=EN');
  }
}
