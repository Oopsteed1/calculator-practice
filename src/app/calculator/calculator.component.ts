import { Component } from '@angular/core';
import { CalculatiorHistoryService } from '../calculatior-history-service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  currentInput = '';
  memoryValue = 0;
  memoryRead: boolean = false;
  fullCalculation = '';
  isNightMode = false;
  isMemoryEmpty = true;
  
  constructor(
    public historyService: CalculatiorHistoryService
    ) {
      const storedMemory = localStorage.getItem('calculatorMemory');
      if (storedMemory) {
        this.memoryValue = parseFloat(storedMemory);
      }
    }

  numberClick(value: string): string { 
    if (this.currentInput === 'Invalid number' || this.currentInput.trim() === '') {
      this.currentInput = '';
    }
    if (this.currentInput.includes('=')) {
      this.currentInput = '';
    }
  
    if (this.memoryRead) {
      this.memoryRead = false;
      this.currentInput = '';
    }
    this.currentInput += value;
    return this.currentInput;
  }

  clear() {
    this.currentInput = '';
  }

  calculate() {
    try {
      const result = eval(this.currentInput);
      this.fullCalculation = this.currentInput;
      this.currentInput = this.formatNumber(result, 8);

      const calculation = `${this.fullCalculation} = ${this.currentInput}`;
      
      this.historyService.calculationHistory.push(calculation);
    } catch (error) {
      this.currentInput = 'Invalid number';
    }
  }

  formatNumber(value: number, decimalPlaces: number): string {
    return Number(value.toFixed(decimalPlaces)).toString();
  }

  addToMemory() {
    try {
      const inputNumber = parseFloat(this.currentInput);
      if (!isNaN(inputNumber)) {
        this.memoryValue += inputNumber;
        this.currentInput = '';
        localStorage.setItem('calculatorMemory', this.memoryValue.toString());
      }
    } catch (error) {
      this.currentInput = 'Invalid number';
    }
  }
  minusFromMemory() {
    try {
      const inputNumber = parseFloat(this.currentInput);
      if (!isNaN(inputNumber)) {
        this.memoryValue -= inputNumber;
        this.currentInput = '';
        localStorage.setItem('calculatorMemory', this.memoryValue.toString());
      }
    } catch (error) {
      this.currentInput = 'Invalid number';
    }
  }

  ms() {
    const currentInputValue = parseFloat(this.currentInput);
  
    if (!isNaN(currentInputValue)) {
      this.memoryValue = currentInputValue;
      localStorage.setItem('calculatorMemory', this.memoryValue.toString());
      this.isMemoryEmpty = false;
    }
  }
  
  mr() {
    const storedMemory = localStorage.getItem('calculatorMemory');
    if (storedMemory) {
      const storedMemoryValue = parseFloat(storedMemory);
      if (!isNaN(storedMemoryValue)) {
        this.currentInput = storedMemoryValue.toString();
        this.memoryRead = true;
        this.isMemoryEmpty = false;
      }
    }
  }
  
  mc() {
    const storedMemory = localStorage.getItem('calculatorMemory');
    if (storedMemory) {
      localStorage.removeItem('calculatorMemory');
      this.currentInput = '';
      this.isMemoryEmpty = true;
    }
  }
  
  navigateToHistory() {
    this.historyService.navigateToHistory();
  }

  toggleHistory() {
    this.historyService.toggleHistory();
  }

  toggleNightMode() {
    this.historyService.toggleMode();
  }
}