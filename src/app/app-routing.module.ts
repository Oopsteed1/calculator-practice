import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'history', component: HistoryComponent, data: { historyData: [] } },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
