import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOneDistroComponent } from './day-one-distro.component';

describe('DayOneDistroComponent', () => {
  let component: DayOneDistroComponent;
  let fixture: ComponentFixture<DayOneDistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayOneDistroComponent]
    });
    fixture = TestBed.createComponent(DayOneDistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
