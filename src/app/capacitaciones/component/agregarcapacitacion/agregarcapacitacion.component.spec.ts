import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcapacitacionComponent } from './agregarcapacitacion.component';

describe('AgregarcapacitacionComponent', () => {
  let component: AgregarcapacitacionComponent;
  let fixture: ComponentFixture<AgregarcapacitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcapacitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
