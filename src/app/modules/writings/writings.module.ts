import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingsRoutingModule } from './writings-routing.module';
import { WritingsComponent } from './writings.component';


@NgModule({
  declarations: [WritingsComponent],
  imports: [
    CommonModule,
    WritingsRoutingModule
  ]
})
export class WritingsModule { }
