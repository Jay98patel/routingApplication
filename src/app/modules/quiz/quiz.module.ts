import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuizIntroductionComponent } from './components/quiz-introduction/quiz-introduction.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { QuizTipsComponent } from './components/quiz-tips/quiz-tips.component';
import { QuizfooterComponent } from './components/quizfooter/quizfooter.component';
import { PlayQuizComponent } from './components/play-quiz/play-quiz.component';


@NgModule({
  declarations: [QuizComponent, QuizIntroductionComponent, AdvertisementComponent, QuizTipsComponent, QuizfooterComponent, PlayQuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
