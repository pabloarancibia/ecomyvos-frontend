import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './component/principal/principal.component';

import { AuthGuard } from "./../guards/auth.guard";
import { DashComponent } from './component/dash/dash.component';


const routes: Routes = [
  {
    path: '/',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
  }
  ,
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GchartsRoutingModule { }
