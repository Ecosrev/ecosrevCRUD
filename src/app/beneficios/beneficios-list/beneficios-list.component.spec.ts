import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosListComponent } from './beneficios-list.component';

describe('BeneficiosListComponent', () => {
  let component: BeneficiosListComponent;
  let fixture: ComponentFixture<BeneficiosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiosListComponent]
    });
    fixture = TestBed.createComponent(BeneficiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
