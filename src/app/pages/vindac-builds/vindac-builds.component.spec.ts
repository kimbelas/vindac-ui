import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VindacBuildsComponent } from './vindac-builds.component';

describe('VindacBuildsComponent', () => {
  let component: VindacBuildsComponent;
  let fixture: ComponentFixture<VindacBuildsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VindacBuildsComponent]
    });
    fixture = TestBed.createComponent(VindacBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
