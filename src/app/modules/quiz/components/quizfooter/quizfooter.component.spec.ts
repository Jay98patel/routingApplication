import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizfooterComponent } from './quizfooter.component';

describe('QuizfooterComponent', () => {
  let component: QuizfooterComponent;
  let fixture: ComponentFixture<QuizfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
