import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  isLogged: boolean;
  constructor(private UsuariosService: UsuariosService,
    private router: Router
  ) {
    this.isLogged = false;

  }

  ngOnInit(): void {
    if (localStorage.getItem('token_gym')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    //subscripción para saber si se hace login o logout
    //en un observable en subscribe SIEMPRE recibe una función anónima o arrow
    this.UsuariosService.loginObs().subscribe((result) => {
      console.log('Acción de login', result);
      this.isLogged = result;
    })



  }

  onClickLogout() {
    const seguro = confirm('¿Quieres abandonar tu aplicación de gimnasio?')//hacer más bonito
    if (seguro) {
      localStorage.removeItem('token_gym');
      this.UsuariosService.logged(false);
      this.router.navigate(['/login']);
    }

  }

}
