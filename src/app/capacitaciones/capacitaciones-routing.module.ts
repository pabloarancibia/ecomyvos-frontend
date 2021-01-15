import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarcapacitacionComponent } from './component/agregarcapacitacion/agregarcapacitacion.component';
import { AsignacionesComponent } from './component/asignaciones/asignaciones.component';
import { CapacitacionesComponent } from './component/capacitaciones/capacitaciones.component';
import { VercapacitacionComponent } from './component/vercapacitacion/vercapacitacion.component';

const routes: Routes = [
    {
        path: '',
        component: CapacitacionesComponent
    },
    {
        path: 'agregar',
        component: AgregarcapacitacionComponent
    },
    {
        path: 'ver',
        component: VercapacitacionComponent
    },
    {
        path: 'asignar',
        component: AsignacionesComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CapacitacionesRoutingModule { }