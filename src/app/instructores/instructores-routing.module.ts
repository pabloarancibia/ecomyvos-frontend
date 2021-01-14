import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarinstructorComponent } from './component/agregarinstructor/agregarinstructor.component';
import { InstructoresComponent } from './component/instructores/instructores.component';

const routes: Routes = [
    {
        path: '',
        component: InstructoresComponent
    },
    {
        path: 'agregar',
        component: AgregarinstructorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstructoresRoutingModule { }
