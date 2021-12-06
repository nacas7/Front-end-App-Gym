import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;
  //esto es un obsevable (ESTAMOS CREANDO UN OBSERVABLE)
  private login$: Subject<boolean>;


  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
    this.login$ = new Subject;
  }

  registro(formValue: any): Promise<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/registro`, formValue).toPromise()
  }

  login(formValue: any): Promise<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/login`, formValue).toPromise()
  }

  //cuando ejecute este método, avisa a los componentes subscriptos a este obsevable lo que está pasando(ESTE ES PARA AVISAR) AQUÍ SIGUE SIENDO UN SUBJECT
  logged(isLogged: boolean) {
    this.login$.next(isLogged)
  }

  //ESTE PARA QUE ME DEVUELVA LA SUBSCRIPCIÓN (el observable), lo transformamos en un observable para que te puedes subscribir a él 
  loginObs() {
    return this.login$.asObservable();
  }

}
