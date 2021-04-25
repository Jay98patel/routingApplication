import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizIntroductionComponent } from './components/quiz-introduction/quiz-introduction.component';
import { QuizComponent } from './quiz.component';


const routes: Routes = [
  {
    path:'',component:QuizIntroductionComponent
  },
  {
    path:'quiz',component:QuizIntroductionComponent
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
