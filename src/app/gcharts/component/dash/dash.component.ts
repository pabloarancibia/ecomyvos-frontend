import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Asistencias por Capacitación', cols: 1, rows: 1, content:'app-bar-cap-asis' },
          { title: 'Card 2', cols: 1, rows: 1, content:'app-pie-generos' },
          { title: 'Duración Capacitaciones', cols: 2, rows: 1, content:'app-timeline-caps' },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Asistencias por Capacitación', cols: 1, rows: 2, content:'app-bar-cap-asis' },
        { title: 'Card 2', cols: 1, rows: 2, content:'app-pie-generos'},
        { title: 'Duración Capacitaciones', cols: 2, rows: 1, content:'app-timeline-caps' },
        { title: 'Card 4', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
