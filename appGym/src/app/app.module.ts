import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { FormularioClientesComponent } from './clientes/formulario-clientes/formulario-clientes.component';
import { ListaProfesoresComponent } from './profesores/lista-profesores/lista-profesores.component';
import { FormularioProfesoresComponent } from './profesores/formulario-profesores/formulario-profesores.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    FormularioClientesComponent,
    ListaProfesoresComponent,
    FormularioProfesoresComponent,
    MenuComponent,
    RegistroComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
