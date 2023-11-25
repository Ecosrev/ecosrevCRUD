import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosFormComponent } from './beneficios-form.component';

describe('BeneficiosFormComponent', () => {
  let component: BeneficiosFormComponent;
  let fixture: ComponentFixture<BeneficiosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiosFormComponent]
    });
    fixture = TestBed.createComponent(BeneficiosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
