import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatiorHistoryService } from '../calculatior-history-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  calculationHistory: string[] = [];

  constructor(
    private router: Router,
    public historyService: CalculatiorHistoryService) {}

  ngOnInit() {
    this.calculationHistory = this.historyService.calculationHistory;
  }

  navigateToCalculator() {
    this.router.navigate(['calculator']);
  }
  clearHistory() {
    this.historyService.clearHistory();
    this.calculationHistory = [];
  }

  toggleNightMode() {
    this.historyService.toggleMode();
  }
}
