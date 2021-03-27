import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { PerfilComponent } from './component/perfil/perfil.component';

import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [UsuariosComponent, PerfilComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialModule
  ]
})
export class AdministracionModule { }
