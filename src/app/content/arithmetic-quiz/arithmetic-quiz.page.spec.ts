import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArithmeticQuizPage } from './arithmetic-quiz.page';

describe('ArithmeticQuizPage', () => {
  let component: ArithmeticQuizPage;
  let fixture: ComponentFixture<ArithmeticQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
