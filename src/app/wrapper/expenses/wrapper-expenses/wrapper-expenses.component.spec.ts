import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperExpensesComponent } from './wrapper-expenses.component';

describe('WrapperExpensesComponent', () => {
  let component: WrapperExpensesComponent;
  let fixture: ComponentFixture<WrapperExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
