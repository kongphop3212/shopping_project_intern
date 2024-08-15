import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingEditComponent } from './shipping-edit.component';

describe('ShippingEditComponent', () => {
  let component: ShippingEditComponent;
  let fixture: ComponentFixture<ShippingEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingEditComponent]
    });
    fixture = TestBed.createComponent(ShippingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
