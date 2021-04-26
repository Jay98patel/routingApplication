import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'quiz', pathMatch: 'full'
  },
  {
    path: 'quiz', loadChildren: () => import('./modules/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'progress', loadChildren: () => import('./modules/progress/progress.module').then(m => m.ProgressModule)
  },
  {
    path: 'writing', loadChildren: () => import('./modules/writings/writings.module').then(m => m.WritingsModule)
  },
  {
    path: 'instructors', loadChildren: () => import('./modules/instructors/instructors.module').then(m => m.InstructorsModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
