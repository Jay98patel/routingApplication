import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WritingsComponent } from './writings.component';


const routes: Routes = [
  {
    path:'',component:WritingsComponent
  },
  {
    path:'writing',component:WritingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingsRoutingModule { }
