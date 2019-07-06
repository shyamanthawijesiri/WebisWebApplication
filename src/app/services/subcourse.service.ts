import { Injectable } from '@angular/core';
import { Subcourses } from '../subcourse.model';

@Injectable({
  providedIn: 'root'
})
export class SubcourseService {
  private _subcourse: Subcourses[] = [
    new Subcourses (
      'c1',
      's1',
      'angular'
    ),
    new Subcourses (
      'c1',
      's2',
      'node'
    ),
    new Subcourses (
      'c2',
      's1',
      'android'
    ),
    new Subcourses (
      'c2',
      's2',
      'ionic'
    ),

    ]
    get subcourses(){
      return [...this._subcourse];
    }


  constructor() { }
}
