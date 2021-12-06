import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup
  constructor(
    private usuariosServices: UsuariosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl,
      username: new FormControl,
      password: new FormControl,
      email: new FormControl
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.usuariosServices.registro(this.formulario.value)
    this.router.navigate(['/login'])


  }

}
