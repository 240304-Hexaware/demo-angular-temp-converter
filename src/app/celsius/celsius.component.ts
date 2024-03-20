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

  constructor(converterService: ConverterService) {
    this.converter = converterService;

  }

  convertTemp(event: any) {
    this.converter.cToF(event.target.value);
  }

}
