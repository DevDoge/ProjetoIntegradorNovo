import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperAccountComponent } from './wrapper-account.component';

describe('WrapperAccountComponent', () => {
  let component: WrapperAccountComponent;
  let fixture: ComponentFixture<WrapperAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
