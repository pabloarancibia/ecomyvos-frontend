import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'capacitaciones',
        loadChildren: () => import('./capacitaciones/capacitaciones.module').then(m => m.CapacitacionesModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
      },
      {
        path: 'instructores',
        loadChildren: () => import('./instructores/instructores.module').then(m => m.InstructoresModule)
      },

    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
