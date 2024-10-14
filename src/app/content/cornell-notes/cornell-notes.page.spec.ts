import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CornellNotesPage } from './cornell-notes.page';

describe('CornellNotesPage', () => {
  let component: CornellNotesPage;
  let fixture: ComponentFixture<CornellNotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CornellNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
