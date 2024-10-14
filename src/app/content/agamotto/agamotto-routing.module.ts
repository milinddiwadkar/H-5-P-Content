// src/app/content/agamotto/agamotto-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgamottoPage } from './agamotto.page';

const routes: Routes = [
  {
    path: '',
    component: AgamottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgamottoRoutingModule {}
