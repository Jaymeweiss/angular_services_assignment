import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  constructor() {
  }

  increaseActiveToInactiveCounter(): void {
    this.activeToInactive += 1;
    console.log(`Active to Inactive counter: ${this.activeToInactive}`);
  }

  increaseInactiveToActiveCounter(): void {
    this.inactiveToActive += 1;
    console.log(`Inactive to active counter: ${this.inactiveToActive}`);
  }
}
