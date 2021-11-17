import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperOrdersComponent } from './wrapper-orders.component';

describe('WrapperOrdersComponent', () => {
  let component: WrapperOrdersComponent;
  let fixture: ComponentFixture<WrapperOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
