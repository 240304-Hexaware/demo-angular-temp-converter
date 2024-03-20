import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-fahrenheit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fahrenheit.component.html',
  styleUrl: './fahrenheit.component.css'
})
export class FahrenheitComponent {
  converter: ConverterService;

  constructor(converterService: ConverterService) {
    this.converter = converterService;
  }

  convertTemp(event: any) {
    this.converter.fToC(event.target.value);
  }

}
