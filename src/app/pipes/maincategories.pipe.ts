import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maincategories'
})
export class MaincategoriesPipe implements PipeTransform {

  transform(value: any, mid: string): any {
    const arr = [];
    for(const item of value) {

      if(item.mid === mid ) {
        arr.push(item)
      }

    }
    return arr;
  }

}
