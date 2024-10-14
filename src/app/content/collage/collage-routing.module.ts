import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollagePage } from './collage.page';

const routes: Routes = [
  {
    path: '',
    component: CollagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollagePageRoutingModule {}
