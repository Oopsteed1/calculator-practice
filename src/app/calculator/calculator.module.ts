import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';
import { HistoryModule } from '../history/history.module';



@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    HistoryModule
  ],
  exports: [CalculatorComponent],
})
export class CalculatorModule { }
