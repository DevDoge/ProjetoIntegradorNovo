import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperHelpComponent } from './wrapper-help.component';

describe('WrapperHelpComponent', () => {
  let component: WrapperHelpComponent;
  let fixture: ComponentFixture<WrapperHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
