import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Clientes } from 'src/app/interfaces/interfaces.clientes';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Clientes[];
  constructor(private ClientesService: ClientesService) {
    this.clientes = [];
  }

  async ngOnInit() {
    const response = await this.ClientesService.getAll();
    this.clientes = response;
  }


}
