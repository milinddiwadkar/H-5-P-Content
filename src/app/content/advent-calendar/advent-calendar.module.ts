import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventCalendarPageRoutingModule } from './advent-calendar-routing.module';

import { AdventCalendarPage } from './advent-calendar.page';
import { ContentModalComponent } from './content-modal/content-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdventCalendarPageRoutingModule
  ],
  declarations: [ContentModalComponent]
})
export class AdventCalendarPageModule {}
