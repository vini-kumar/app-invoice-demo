import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInvComponent } from './details-inv.component';

describe('DetailsInvComponent', () => {
  let component: DetailsInvComponent;
  let fixture: ComponentFixture<DetailsInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
