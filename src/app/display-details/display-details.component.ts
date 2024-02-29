import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
  .Blue{
    background-color: blue;
    color: white;
  }`]
})
export class DisplayDetailsComponent {
  showSecret = false;
  log = [new Date(2024, 2, 29)];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date(2024, 2, 29));
  }
}
