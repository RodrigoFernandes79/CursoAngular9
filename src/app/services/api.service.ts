import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //declarar o HttpClient
  constructor(private http: HttpClient) { }
//base para buscar dados em qualquer api Service
//url tirada do site jsonplaceholder onde tem varios exemplos de json apis
  public getImg():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
}
