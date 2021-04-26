import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementComponent } from '../quiz/components/advertisement/advertisement.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProgressComponent } from './progress.component';


const routes: Routes = [
  {
    path:'',component:ProgressComponent
  },
  {
    path:'progress',component:ProgressComponent
  },
  {
    path:'performance',component:PerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressRoutingModule { }
