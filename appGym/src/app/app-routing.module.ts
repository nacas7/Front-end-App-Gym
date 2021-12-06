import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioClientesComponent } from './clientes/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { LoginGuard } from './guard/login.guard';
import { MenuComponent } from './menu/menu.component';
import { FormularioProfesoresComponent } from './profesores/formulario-profesores/formulario-profesores.component';
import { ListaProfesoresComponent } from './profesores/lista-profesores/lista-profesores.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clientes' },
  { path: 'menu', component: MenuComponent },
  {
    path: 'clientes',
    component: ListaClientesComponent,
    canActivate: [LoginGuard]//ANTES DE QUE SE ACTIVE ESTE COMPONENTE VA A PASAR POR ESTE GUARD
  },
  {
    path: 'clientes/new',
    component: FormularioClientesComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profesores',
    component: ListaProfesoresComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'profesores/new',
    component: FormularioProfesoresComponent,
    canActivate: [LoginGuard]
  },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
