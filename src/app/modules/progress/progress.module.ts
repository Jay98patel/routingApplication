import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressRoutingModule } from './progress-routing.module';
import { ProgressComponent } from './progress.component';
import { AdvertisementComponent } from '../quiz/components/advertisement/advertisement.component';
import { PerformanceComponent } from './performance/performance.component';
import { PerformanceAdvertisementComponent } from './performance-advertisement/performance-advertisement.component';


@NgModule({
  declarations: [ProgressComponent, PerformanceComponent, PerformanceAdvertisementComponent],
  imports: [
    CommonModule,
    ProgressRoutingModule
  ]
})
export class ProgressModule { }
