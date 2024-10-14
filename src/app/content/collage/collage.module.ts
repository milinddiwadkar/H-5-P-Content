import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollagePageRoutingModule } from './collage-routing.module';

import { CollagePage } from './collage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollagePageRoutingModule
  ],
  declarations: [CollagePage]
})
export class CollagePageModule {}
