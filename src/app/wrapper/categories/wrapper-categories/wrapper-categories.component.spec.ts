import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCategoriesComponent } from './wrapper-categories.component';

describe('WrapperCategoriesComponent', () => {
  let component: WrapperCategoriesComponent;
  let fixture: ComponentFixture<WrapperCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
