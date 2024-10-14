import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnPage } from './column.page';

describe('ColumnPage', () => {
  let component: ColumnPage;
  let fixture: ComponentFixture<ColumnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
