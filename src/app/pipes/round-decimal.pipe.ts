import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDecimal'
})
export class RoundDecimalPipe implements PipeTransform {

  transform(value: number, decimals: number = 1): number {
    if (isNaN(value)) return value;
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

}
