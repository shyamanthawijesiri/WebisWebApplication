import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../course.model';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
 

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

getCourseVideos(catergory){
  const course=this.http.get("http://localhost:3000/subCatergory/display/"+catergory);
 // const course=this.http.get("http://localhost:3000/subCatergory/display"+catergory);

   console.log(course);
   console.log("MMMMMMMMMMMMMMM")
   return course;
}

getCourseVideossub(catergory,subCatergory){
  const course=this.http.get("http://localhost:3000/subCatergory/display/"+catergory+"/"+subCatergory);
  
   return course;
}

courseVideoUpdate = new EventEmitter<string>( )



}
