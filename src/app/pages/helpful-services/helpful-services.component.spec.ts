import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulServicesComponent } from './helpful-services.component';

describe('HelpfulServicesComponent', () => {
  let component: HelpfulServicesComponent;
  let fixture: ComponentFixture<HelpfulServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpfulServicesComponent]
    });
    fixture = TestBed.createComponent(HelpfulServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
