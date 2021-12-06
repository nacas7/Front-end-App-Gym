import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/profesores.service';

@Component({
  selector: 'app-formulario-profesores',
  templateUrl: './formulario-profesores.component.html',
  styleUrls: ['./formulario-profesores.component.css']
})
export class FormularioProfesoresComponent implements OnInit {

  formulario: FormGroup;
  constructor(private profesoresServices: ProfesoresService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      experiencia: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.profesoresServices.create(this.formulario.value)
      console.log(response)
      if (response.insertId) {

        alert('Profesor insertado correctamente')
        this.router.navigate(['/profesores'])
      }
    } catch (err) {
      console.log(err)
    }

  }

}
