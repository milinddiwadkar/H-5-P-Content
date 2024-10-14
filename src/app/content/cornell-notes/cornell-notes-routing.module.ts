import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CornellNotesPage } from './cornell-notes.page';

const routes: Routes = [
  {
    path: '',
    component: CornellNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CornellNotesPageRoutingModule {}
