import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Capacitaciones } from '../../../models/capacitaciones.model';
import { CapacitacionesService } from '../../../services/capacitaciones.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-vercapacitacion',
  templateUrl: './vercapacitacion.component.html',
  styleUrls: ['./vercapacitacion.component.scss']
})
export class VercapacitacionComponent implements OnInit {

  public capacitacion: Capacitaciones;

  constructor(
    private capacitacionesService: CapacitacionesService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.getCapacitacion(); 
  }

  public async getCapacitacion() {
      const id = this.activeRoute.snapshot.paramMap.get('id');
      console.log(id);
      try {
        await this.capacitacionesService.getCapacitacion(id)
          .then(report => {
            this.capacitacion = report,
            console.log(this.capacitacion);
            });
      } catch (error) {
        console.log(error);
      }
      
  }

  eliminarCapacitacion(id: number){
    if(confirm("Está seguro que desea eliminar la capacitación "
      +id+" (esta acción no se puede revertir) ")) {
        // this.capacitacion.estado = 'eliminado';
        this.capacitacionesService.eliminarCapacitacion(id)
        .then(res=>
          this.router.navigate(['/capacitaciones'])
          );
    } 
  }

}
