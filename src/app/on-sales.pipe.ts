import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSales'
})
export class OnSalesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log('My pipe', value)
    if (value) {
      return 'Đang hạ giá'
    }
    return '';
  }

}
