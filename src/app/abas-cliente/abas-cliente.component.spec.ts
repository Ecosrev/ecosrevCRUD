import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasClienteComponent } from './abas-cliente.component';

describe('AbasClienteComponent', () => {
  let component: AbasClienteComponent;
  let fixture: ComponentFixture<AbasClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbasClienteComponent]
    });
    fixture = TestBed.createComponent(AbasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
