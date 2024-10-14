import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArScavengerPageRoutingModule } from './ar-scavenger-routing.module';

import { ArScavengerPage } from './ar-scavenger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArScavengerPageRoutingModule
  ],
  declarations: [ArScavengerPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArScavengerPageModule {}
