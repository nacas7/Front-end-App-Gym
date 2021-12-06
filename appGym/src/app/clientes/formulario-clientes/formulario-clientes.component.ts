import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private ClientesService: ClientesService,
    private router: Router
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      dni: new FormControl(),
      fecha_nacimiento: new FormControl(),
      edad: new FormControl(),
      email: new FormControl(),
      sexo: new FormControl(),
      cuota: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.ClientesService.create(this.formulario.value)
      if (response.id) {
        alert('Cliente insertado')
        this.router.navigate(['/clientes'])
      }
    } catch (err) {
      console.log(err)
    }
  }
}
