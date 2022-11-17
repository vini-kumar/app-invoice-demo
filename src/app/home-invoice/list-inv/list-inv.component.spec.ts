import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvComponent } from './list-inv.component';

describe('ListInvComponent', () => {
  let component: ListInvComponent;
  let fixture: ComponentFixture<ListInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
