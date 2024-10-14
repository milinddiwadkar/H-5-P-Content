import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArScavengerPage } from './ar-scavenger.page';

const routes: Routes = [
  {
    path: '',
    component: ArScavengerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArScavengerPageRoutingModule {}
