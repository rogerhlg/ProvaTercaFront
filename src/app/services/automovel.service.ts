import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Automovel } from '../models/automovel';

@Injectable({
  providedIn: 'root'
})
export class AutomovelService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:5000/api/automovel";

  list(): Observable<Automovel[]>{
    return this.http.get<Automovel[]>(`${this.baseUrl}/list`);
  }

  create(carro: Automovel): Observable<Automovel>{
    return this.http.post<Automovel>(`${this.baseUrl}/create`, carro);
  } 
}
