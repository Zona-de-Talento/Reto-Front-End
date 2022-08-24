import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  pathApi = 'http://localhost:3000/productos' 
  produtos:any[] = [] 

  constructor( private httpClient: HttpClient ) { }

  getProductos(): Observable<any[]>{
    return this.
      httpClient
      .get<any[]>(this.pathApi)
  }
}
