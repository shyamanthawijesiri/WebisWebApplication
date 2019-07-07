import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subcourses } from '../subcourse.model';
import { SubcourseService } from '../services/subcourse.service';
import { CourseService } from '../services/course.service';
import { Course } from '../course.model';


@Component({
  selector: 'app-displaycourses',
  templateUrl: './displaycourses.component.html',
  styleUrls: ['./displaycourses.component.css']
})
export class DisplaycoursesComponent implements OnInit {
  loadedSubCourses: Subcourses[];
  loadedCourses: Course[];
   course1: {id: string };
   course2: { id: string}
   
  //  maincourses = ['node', 'js','angular','phython','springboot','jsp'];
  // courses = ['c1', 'c2', 'c3' , 'c4', 'c5' ]

  constructor(private route: ActivatedRoute, private subCourseService: SubcourseService, private coursesService: CourseService ) { }

  ngOnInit() {
    this.loadedSubCourses = this.subCourseService.subcourses;
    this.loadedCourses = this.coursesService.courses;
    this.course1 = {
      id: this.route.snapshot.params['mid']
    };
    
    this.course2 = {
      id: this.route.snapshot.params['sid']
    };
    
    
    this.route.params.subscribe(
      (params: Params) => {
        this.course1.id = params['mid'];
      }
    )
    this.route.params.subscribe(
      (params: Params) => {
        this.course2.id = params['sid'];
      }
    )
    

  }

}
