import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDocsComponent } from './invoice-docs.component';

describe('InvoiceDocsComponent', () => {
  let component: InvoiceDocsComponent;
  let fixture: ComponentFixture<InvoiceDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
