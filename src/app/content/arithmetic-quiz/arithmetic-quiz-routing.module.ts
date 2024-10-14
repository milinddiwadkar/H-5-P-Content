import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArithmeticQuizPage } from './arithmetic-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: ArithmeticQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArithmeticQuizPageRoutingModule {}
