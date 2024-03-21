import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterService } from '../converter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fahrenheit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fahrenheit.component.html',
  styleUrl: './fahrenheit.component.css'
})
export class FahrenheitComponent {
  converter: ConverterService;
  fahrenheitTemp: number = 32;
  unsubscribe: Function;

  constructor(converterService: ConverterService) {
    this.converter = converterService;
    //subscribe for new fahrenheit values
    this.unsubscribe = this.converter.subscribe({
      topic: "fahrenheit",
      notify: (value: number) => {
        this.fahrenheitTemp = value;
      }
    });
  }

  convertTemp(event: any) {
    this.converter.publish("celsius", this.converter.fToC(event.target.value));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
