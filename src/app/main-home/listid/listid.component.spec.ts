import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListidComponent } from './listid.component';

describe('ListidComponent', () => {
  let component: ListidComponent;
  let fixture: ComponentFixture<ListidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
