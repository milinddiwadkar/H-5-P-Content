import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventCalendarPage } from './advent-calendar.page';

describe('AdventCalendarPage', () => {
  let component: AdventCalendarPage;
  let fixture: ComponentFixture<AdventCalendarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
