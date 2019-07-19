import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maincategories'
})
export class MaincategoriesPipe implements PipeTransform {

  transform(value: any, mid: string): any {
    const arr = [];
    console.log("mainpipe")
    console.log(typeof(value))
    for(let item of value) {
        console.log("fdg")
      if(item.catergoryName === mid ) {
        arr.push(item)
      }

    }
    return arr;
  }

}
