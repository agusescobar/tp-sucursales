import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextstepsComponent } from './body/nextsteps/nextsteps.component';
import { ListadoventasComponent } from './body/listadoventas/listadoventas.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';

const routes: Routes = [
  { path: '', component: NextstepsComponent },
  { path: 'sucursales', component: ListadosucursalesComponent },
  { path: 'ventas', component: ListadoventasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
