import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarinstructorComponent } from './agregarinstructor.component';

describe('AgregarinstructorComponent', () => {
  let component: AgregarinstructorComponent;
  let fixture: ComponentFixture<AgregarinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarinstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
