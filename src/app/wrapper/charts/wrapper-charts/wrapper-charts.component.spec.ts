import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperChartsComponent } from './wrapper-charts.component';

describe('WrapperChartsComponent', () => {
  let component: WrapperChartsComponent;
  let fixture: ComponentFixture<WrapperChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
