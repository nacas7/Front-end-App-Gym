import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from './interfaces/interfaces.clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //TODAS LAS PETICIONES DESPUÉS DEL TOKEN TIENEN QUE TENER CABECERA
  baseUrl: string;
  constructor(private HttpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/clientes'
  }


  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_gym')!
      })
    }

    return this.HttpClient.get<any>(this.baseUrl, httpOptions).toPromise()
  }

  create(formValue: Clientes): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_gym')!
      })
    }

    return this.HttpClient.post<any>(this.baseUrl, formValue, httpOptions).toPromise()

  }
}
