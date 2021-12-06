import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioProfesoresComponent } from './formulario-profesores.component';

describe('FormularioProfesoresComponent', () => {
  let component: FormularioProfesoresComponent;
  let fixture: ComponentFixture<FormularioProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
