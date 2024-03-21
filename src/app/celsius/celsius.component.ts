import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-celsius',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './celsius.component.html',
  styleUrl: './celsius.component.css'
})
export class CelsiusComponent {
  converter: ConverterService;
  celsiusTemp: number = 0;
  unsubscribe: Function;

  constructor(converterService: ConverterService) {
    this.converter = converterService;
    //subscribe for new celsius values
    this.unsubscribe = this.converter.subscribe({
      topic: "celsius",
      notify: (value: number) => {
        this.celsiusTemp = value;
      }
    });
  }

  convertTemp(event: any) {
    this.converter.publish("fahrenheit", this.converter.cToF(event.target.value));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
