import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateStartsComponent } from './rate-starts.component';

describe('RateStartsComponent', () => {
  let component: RateStartsComponent;
  let fixture: ComponentFixture<RateStartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateStartsComponent]
    });
    fixture = TestBed.createComponent(RateStartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
