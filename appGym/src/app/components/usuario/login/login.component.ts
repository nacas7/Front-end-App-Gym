import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup
  error: string;

  constructor(
    private usuarioServices: UsuariosService,
    private router: Router
  ) {
    this.error = '';
    this.formulario = new FormGroup({
      email: new FormControl('pedro@gmail.com'),
      password: new FormControl('pedro20')
    })
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.error = '';
    const response = await this.usuarioServices.login(this.formulario.value)

    if (response.error) {
      this.error = response.error;

    } else { //esto es el localStorage para guardan de forma automática el token que necesito para entrar en la app
      localStorage.setItem('token_gym', response.token);
      alert('Login Correcto');
      this.usuarioServices.logged(true);//con esto aviso que me he logado en la página
      this.router.navigate(['/clientes']);//para que me lleve a la página que quiero después del login

    }

  }

}
