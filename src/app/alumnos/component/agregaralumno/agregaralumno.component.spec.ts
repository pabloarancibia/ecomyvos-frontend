import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaralumnoComponent } from './agregaralumno.component';

describe('AgregaralumnoComponent', () => {
  let component: AgregaralumnoComponent;
  let fixture: ComponentFixture<AgregaralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaralumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
