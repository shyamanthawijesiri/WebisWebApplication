import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';
import { SubcourseService } from '../services/subcourse.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loadedCourses: any //Course[];
  loadedSubCourses: any
  loadedCourseVideo: any


  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private subCourseService: SubcourseService) { }

  ngOnInit() {
    console.log("navbar");


    this.courseService.getCourses()
    .subscribe(response => {
      this.loadedCourses=response;


    });
    console.log(this.loadedCourses);




  }
  // subcatergory update
   onSelect(courseName: string){
    this.subCourseService. getSubcourses(courseName).subscribe(response => {
      this.loadedSubCourses=response;
      this.subCourseService.courseUpdate.emit(this.loadedSubCourses);


    });
    // main catergory video update
    console.log(courseName);
    this.courseService.getCourseVideos(courseName).subscribe(response =>{
      this.loadedCourseVideo=response;
      this.courseService.courseVideoUpdate.emit(this.loadedCourseVideo);
    })
   }
  // clickSubCatergories(){
  //   this.loadedSubCourses = this.subCourseService. getSubcourses(this.course2.id).subscribe(response => {
  //     this.loadedCourses=response;
  //     console.log(response);

  //   });
  //}

}
