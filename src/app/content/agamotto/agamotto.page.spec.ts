import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgamottoPage } from './agamotto.page';

describe('AgamottoPage', () => {
  let component: AgamottoPage;
  let fixture: ComponentFixture<AgamottoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgamottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
