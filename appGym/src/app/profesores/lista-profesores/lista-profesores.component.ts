import { Component, OnInit } from '@angular/core';
import { Profesores } from 'src/app/interfaces/interfaces.profesores';
import { ProfesoresService } from 'src/app/profesores.service';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  profesores: Profesores[];

  constructor(private ProfesoresService: ProfesoresService) {
    this.profesores = [];
  }

  async ngOnInit() {
    const response = await this.ProfesoresService.getAll()
    this.profesores = response;
  }

}
