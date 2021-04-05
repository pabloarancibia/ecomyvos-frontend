import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarcapacitacionComponent } from './component/agregarcapacitacion/agregarcapacitacion.component';
import { AsignacionesComponent } from './component/asignaciones/asignaciones.component';
import { CapacitacionesComponent } from './component/capacitaciones/capacitaciones.component';
import { VercapacitacionComponent } from './component/vercapacitacion/vercapacitacion.component';

import { AuthGuard } from "./../guards/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: CapacitacionesComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor','alumno']
        }
    },
    {
        path: 'agregar',
        component: AgregarcapacitacionComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
    },
    {
        path: 'ver/:id',
        component: VercapacitacionComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor','alumno']
        }
    },
    {
        path: 'asignar/:id',
        component: AsignacionesComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
    },
    {
        path: 'editar/:id',
        component: AgregarcapacitacionComponent,
        canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CapacitacionesRoutingModule { }