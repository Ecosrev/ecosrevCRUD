import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoFormComponent } from './posto-form.component';

describe('PostoFormComponent', () => {
  let component: PostoFormComponent;
  let fixture: ComponentFixture<PostoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostoFormComponent]
    });
    fixture = TestBed.createComponent(PostoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
