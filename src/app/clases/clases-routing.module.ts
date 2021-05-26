import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./../guards/auth.guard";
import { AgregarclaseComponent } from './component/agregarclase/agregarclase.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AgregarclaseComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //       role: ['admin','instructor']
  //     }
  // },
  {
    path: 'agregar/:id',
    component: AgregarclaseComponent,
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
export class ClasesRoutingModule { }
