import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { QuizIntroductionComponent } from './components/quiz-introduction/quiz-introduction.component';
import { QuizTipsComponent } from './components/quiz-tips/quiz-tips.component';
import { QuizComponent } from './quiz.component';


const routes: Routes = [
  {
    path: '', component: QuizComponent,
  },
  {
    path: 'quizIntroduction', component: QuizIntroductionComponent
  },
  {
    path: 'quizTip', component: QuizTipsComponent
  },
  {
    path: 'advertisement', component: AdvertisementComponent
  },
  {
    path: 'playQuiz', component: AdvertisementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
