import { Injectable } from '@angular/core';
import { Course } from '../course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private _courses: Course[]=[

  new Course(
    'c1',
    'Web Development'
  ),
  new Course(
    'c2',
    'Mobile Development'
  ),
  new Course(
    'c3',
    'Science'
  ),
  new Course(
    'c4',
    'Music'
  ),
];

get courses(){
  return [...this._courses];
}
  constructor() { }
}
