import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './component/perfil/perfil.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '/',
    component: PerfilComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
