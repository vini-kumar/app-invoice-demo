import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvoiceComponent } from './home-invoice.component';

describe('HomeInvoiceComponent', () => {
  let component: HomeInvoiceComponent;
  let fixture: ComponentFixture<HomeInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
