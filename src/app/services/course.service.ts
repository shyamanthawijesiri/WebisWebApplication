import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../course.model';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 $isCourse = new EventEmitter();

  constructor(private http:HttpClient) { }
// private _courses: Course[]=[

//   new Course(
//     'c1',
//     'Web Development'
//   ),
//   new Course(
//     'c2',
//     'Mobile Development'
//   ),
//   new Course(
//     'c3',
//     'Science'
//   ),
//   new Course(
//     'c4',
//     'Music'
//   ),
// ];

// get courses(){
//   return [...this._courses];
// }

getCourses(){
 // const course=this.http.get("http://localhost:3000/course/display");
  const course=this.http.get("http://localhost:3000/catergory/display");

  console.log(course);
  console.log("MMMMMMMMMMMMMMM")
  return course;

}

getId(id:string){
  return id;
}





}
