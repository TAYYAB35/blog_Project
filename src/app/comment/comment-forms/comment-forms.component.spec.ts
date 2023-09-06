import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormsComponent } from './comment-forms.component';

describe('CommentFormsComponent', () => {
  let component: CommentFormsComponent;
  let fixture: ComponentFixture<CommentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
