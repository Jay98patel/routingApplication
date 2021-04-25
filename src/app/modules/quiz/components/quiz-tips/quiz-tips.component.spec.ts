import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTipsComponent } from './quiz-tips.component';

describe('QuizTipsComponent', () => {
  let component: QuizTipsComponent;
  let fixture: ComponentFixture<QuizTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
