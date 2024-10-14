import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdventCalendarPage } from './advent-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: AdventCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventCalendarPageRoutingModule {}
