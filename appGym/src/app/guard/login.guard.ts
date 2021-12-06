import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ClientesService } from '../clientes.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private ClientesServicio: ClientesService) { }

  //ESTO SE VA A EJECUTAR ANTES DE CUALQUIER RUTA, SI DA false NO DEJA PASAR, CON true SI PASA
  async canActivate() {
    if (localStorage.getItem('token_gym')) {
      //Comprobar si el TOKEN es correcto
      //Petición sobre /api/clientes
      const response = await this.ClientesServicio.getAll()
      if (response.error) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

}
