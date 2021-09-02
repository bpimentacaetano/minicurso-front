import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rna } from '../models/rna.model';

@Injectable({
  providedIn: 'root'
})
export class RnaService {

private url= 'http://localhost:5000/v1/rna';

constructor(private httpCliente: HttpClient) { }

getRna(): Observable<Rna[]>{
  return this.httpCliente.get<Rna[]>(this.url);
}

}

