import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { CelsiusComponent } from './celsius/celsius.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FahrenheitComponent, CelsiusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular-temp-converter';
  celsiusValue: number;
  fahrenheitValue: number;

  constructor() {
    this.celsiusValue = 0;
    this.fahrenheitValue = 32;
  }

  convertFToC(emittedValue: any) {
    console.log("convert C to F")
    this.celsiusValue = (emittedValue - 32) * (5/9)
  }

  convertCToF(emittedValue: any) {
    console.log("convert F to C")
    this.fahrenheitValue = (emittedValue * 5/9) + 32;
  }
}
