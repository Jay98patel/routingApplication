import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAdvertisementComponent } from './performance-advertisement.component';

describe('PerformanceAdvertisementComponent', () => {
  let component: PerformanceAdvertisementComponent;
  let fixture: ComponentFixture<PerformanceAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
