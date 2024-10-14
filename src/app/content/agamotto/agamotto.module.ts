import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgamottoPage } from './agamotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AgamottoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AgamottoPageModule { }