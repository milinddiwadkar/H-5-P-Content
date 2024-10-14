import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArithmeticQuizPageRoutingModule } from './arithmetic-quiz-routing.module';

import { ArithmeticQuizPage } from './arithmetic-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArithmeticQuizPageRoutingModule
  ],
  declarations: [ArithmeticQuizPage]
})
export class ArithmeticQuizPageModule {}
