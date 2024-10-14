import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CornellNotesPageRoutingModule } from './cornell-notes-routing.module';

import { CornellNotesPage } from './cornell-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CornellNotesPageRoutingModule,
    
  ],
  declarations: [CornellNotesPage]
})
export class CornellNotesPageModule {}
