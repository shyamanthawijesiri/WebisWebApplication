import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subcateroies'
})
export class SubcateroiesPipe implements PipeTransform {

  transform(value: any, id: number): any {
    const arr = [];
    for(const item of value) {

      if(item === id) {
        arr.push(item)
      }

    }
    return arr;
  }

}
