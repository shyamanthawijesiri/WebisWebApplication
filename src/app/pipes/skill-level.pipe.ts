import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillLevel'
})
export class SkillLevelPipe implements PipeTransform {

  transform(value: any, beginner: string, intermediate: string, advance: string): any {

    if(beginner == null && intermediate == null && advance == null){
      return value;
    }
    return value.filter(value => value.skillLevel == beginner || value.skillLevel == intermediate || value.skillLevel == advance);

  }

}
