import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalculatiorHistoryService {

  calculationHistory: string[] = [];
  currentInput = '';
  showHistory = false;
  nightMode = false;

  constructor(
    private router: Router,
    ) {}

  getCurrentInput(): string {
    return this.currentInput;
  }

  navigateToHistory() {
    this.router.navigate(['history'], { state: { historyData: this.calculationHistory } });
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
  }


  clearHistory(): void {
    this.calculationHistory = [];
  }

  toggleMode() {
    this.nightMode = !this.nightMode;
  }

  isNightMode(): boolean {
    return this.nightMode;
  }
}
