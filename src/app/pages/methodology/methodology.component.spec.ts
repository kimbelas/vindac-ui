import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologyComponent } from './methodology.component';

describe('MethodologyComponent', () => {
  let component: MethodologyComponent;
  let fixture: ComponentFixture<MethodologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethodologyComponent]
    });
    fixture = TestBed.createComponent(MethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
