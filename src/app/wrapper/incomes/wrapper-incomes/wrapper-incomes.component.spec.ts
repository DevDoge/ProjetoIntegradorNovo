import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperIncomesComponent } from './wrapper-incomes.component';

describe('WrapperIncomesComponent', () => {
  let component: WrapperIncomesComponent;
  let fixture: ComponentFixture<WrapperIncomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperIncomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
