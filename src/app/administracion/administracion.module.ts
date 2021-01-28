import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { PerfilComponent } from './component/perfil/perfil.component';


@NgModule({
  declarations: [UsuariosComponent, PerfilComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
