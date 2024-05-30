import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandpasGardenShopComponent } from './grandpas-garden-shop.component';

describe('GrandpasGardenShopComponent', () => {
  let component: GrandpasGardenShopComponent;
  let fixture: ComponentFixture<GrandpasGardenShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandpasGardenShopComponent]
    });
    fixture = TestBed.createComponent(GrandpasGardenShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
