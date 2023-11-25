import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteradaComponent } from './alterada.component';

describe('AlteradaComponent', () => {
  let component: AlteradaComponent;
  let fixture: ComponentFixture<AlteradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlteradaComponent]
    });
    fixture = TestBed.createComponent(AlteradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
