import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPeopleComponent } from './plant-people.component';

describe('PlantPeopleComponent', () => {
  let component: PlantPeopleComponent;
  let fixture: ComponentFixture<PlantPeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantPeopleComponent]
    });
    fixture = TestBed.createComponent(PlantPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
