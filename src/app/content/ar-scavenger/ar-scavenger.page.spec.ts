import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArScavengerPage } from './ar-scavenger.page';

describe('ArScavengerPage', () => {
  let component: ArScavengerPage;
  let fixture: ComponentFixture<ArScavengerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArScavengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
