import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperAccountsComponent } from './wrapper-accounts.component';

describe('WrapperAccountsComponent', () => {
  let component: WrapperAccountsComponent;
  let fixture: ComponentFixture<WrapperAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
