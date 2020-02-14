import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   let arr = value.split(' ');
  //   let arrMayus = [];
  //   for (let palabra of arr) {
  //     let nuevo = palabra.charAt(0).toUpperCase() + palabra.substring(1);
  //     arrMayus.push(nuevo);
  //   }
  //   return arrMayus.join(' ');
  // }

  transform(value: any, ...args: any[]): any {
    return value.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.substring(1)).join(' ');
  }

}
