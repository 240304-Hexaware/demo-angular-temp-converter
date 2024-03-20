import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  celsiusTemp: number;
  fahrenheitTemp: number;

  constructor() {
    this.celsiusTemp = 0;
    this.fahrenheitTemp = 32;
   }

  cToF(celsiusTemp: number):void {
    //(C * 9/5) + 32
    this.fahrenheitTemp = (celsiusTemp * (9/5)) + 32
  }

  fToC(fahrenheitTemp: number):void {
    //(F - 32) * (5/9)
    this.celsiusTemp = (fahrenheitTemp - 32) * (5/9)
  }
}
