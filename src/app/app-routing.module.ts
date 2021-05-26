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
      {
        path: 'multiplicadores',
        loadChildren: () => import('./multiplicadores/multiplicadores.module').then(m => m.MultiplicadoresModule)
      },
      {
        path: 'asistencias',
        loadChildren: () => import('./asistencias/asistencias.module').then(m => m.AsistenciasModule)
      },
      {
        path: 'certificados',
        loadChildren: () => import('./certificados/certificados.module').then(m => m.CertificadosModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionModule)
      },
      {
        path: 'tableros',
        loadChildren: () => import('./gcharts/gcharts.module').then(m => m.GchartsModule)
      },
      {
        path: 'clases',
        loadChildren: () => import('./clases/clases.module').then(m => m.ClasesModule)
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
