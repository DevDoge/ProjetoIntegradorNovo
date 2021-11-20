import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperTransactionsComponent } from './wrapper-transactions.component';

describe('WrapperTransactionsComponent', () => {
  let component: WrapperTransactionsComponent;
  let fixture: ComponentFixture<WrapperTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
