import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../course.model';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { DisplaycoursesComponent } from '../displaycourses/displaycourses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor(private http:HttpClient) { }

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

courseVideoUpdate = new EventEmitter<string>( );
courseDetail = new EventEmitter<string>();

//display a full course
displaycourse(id: string){
  const course = this.http.get("http://localhost:3000/course/display/"+id);
  return course;

}
//user register for a course
registerUser(id: string){
  let header = new HttpHeaders();
  header.append('Content-Type','application/json');
}

}

