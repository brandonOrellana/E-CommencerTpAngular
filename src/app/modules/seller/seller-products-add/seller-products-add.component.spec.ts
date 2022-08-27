import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProductsAddComponent } from './seller-products-add.component';

describe('SellerProductsAddComponent', () => {
  let component: SellerProductsAddComponent;
  let fixture: ComponentFixture<SellerProductsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProductsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
