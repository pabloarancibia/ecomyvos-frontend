import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarinstructorComponent } from './component/agregarinstructor/agregarinstructor.component';
import { InstructoresComponent } from './component/instructores/instructores.component';
import { DetalleinstructorComponent } from './component/detalleinstructor/detalleinstructor.component';

const routes: Routes = [
    {
        path: '',
        component: InstructoresComponent
    },
    {
        path: 'agregar',
        component: AgregarinstructorComponent
    },
    {
        path: 'detalle',
        component: DetalleinstructorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstructoresRoutingModule { }
