import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercapacitacionComponent } from './vercapacitacion.component';

describe('VercapacitacionComponent', () => {
  let component: VercapacitacionComponent;
  let fixture: ComponentFixture<VercapacitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercapacitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
