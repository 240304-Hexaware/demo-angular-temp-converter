import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fahrenheit',
  standalone: true,
  imports: [],
  templateUrl: './fahrenheit.component.html',
  styleUrl: './fahrenheit.component.css'
})
export class FahrenheitComponent {
  @Input() fahrenheitValue: number = 32;
  @Output() newTempEmitter: EventEmitter<number> = new EventEmitter<number>();

  newTemp(event: any) {
    console.log("event: ", event);
    this.newTempEmitter.emit(event.target.value);
  }
}
