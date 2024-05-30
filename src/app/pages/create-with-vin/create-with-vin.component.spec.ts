import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWithVinComponent } from './create-with-vin.component';

describe('CreateWithVinComponent', () => {
  let component: CreateWithVinComponent;
  let fixture: ComponentFixture<CreateWithVinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWithVinComponent]
    });
    fixture = TestBed.createComponent(CreateWithVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
