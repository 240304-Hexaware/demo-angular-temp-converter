import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-celsius',
  standalone: true,
  imports: [],
  templateUrl: './celsius.component.html',
  styleUrl: './celsius.component.css'
})
export class CelsiusComponent {
  @Input() celsiusValue: number = 0;
  @Output() newTempEmitter: EventEmitter<number> = new EventEmitter<number>();

  newTemp(event: any) {
    console.log("event:", event)
    this.newTempEmitter.emit(event.target.value);
  }
  


}
