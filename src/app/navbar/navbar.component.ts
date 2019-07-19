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


  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private subCourseService: SubcourseService) { }

  ngOnInit() {
    console.log("navbar");


    this.courseService.getCourses()
    .subscribe(response => {
      this.loadedCourses=response;


    });
    console.log(this.loadedCourses);




  }
   onSelect(){
    this.subCourseService. getSubcourses("MobileDevelpopment").subscribe(response => {
      this.loadedSubCourses=response;


    });
   }
  // clickSubCatergories(){
  //   this.loadedSubCourses = this.subCourseService. getSubcourses(this.course2.id).subscribe(response => {
  //     this.loadedCourses=response;
  //     console.log(response);

  //   });
  //}

}
