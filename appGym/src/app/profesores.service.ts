import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesores } from './interfaces/interfaces.profesores';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  baseUrl: string
  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/profesores'
  }

  getAll(): Promise<Profesores[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_gym')!
      })
    }

    return this.HttpClient.get<Profesores[]>(this.baseUrl, httpOptions).toPromise()
  };

  create(formValue: Profesores): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_gym')!
      })
    }


    return this.HttpClient.post<any>(this.baseUrl, formValue, httpOptions).toPromise()
  }

}
