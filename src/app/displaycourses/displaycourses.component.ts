import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subcourses } from '../subcourse.model';
import { SubcourseService } from '../services/subcourse.service';
import { CourseService } from '../services/course.service';
import { Course } from '../course.model';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-displaycourses',
  templateUrl: './displaycourses.component.html',
  styleUrls: ['./displaycourses.component.css']
})
export class DisplaycoursesComponent implements OnInit {
  loadedSubCourses:any // Subcourses[];
  mainCourse: { id: string }


  constructor(private activatedRoute: ActivatedRoute, private subCourseService: SubcourseService, private coursesService: CourseService ) { }

  ngOnInit() {

     //this.loadedSubCourses = this.subCourseService.subcourses;
     //this.loadedCourses = this.coursesService.courses;

    // this.loadedCourses = this.coursesService.getCourses().subscribe(response => {
    //   this.loadedCourses=response;
    //   console.log(response);

    // });

    this.mainCourse = {
      id: this.activatedRoute.snapshot.paramMap.get('catergory')
    };
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.mainCourse.id = params['catergory'];
      }
    )
    console.log(this.mainCourse.id);

    this.subCourseService. getSubcourses(this.mainCourse.id).subscribe(response => {
      this.loadedSubCourses=response;


    });



  }




}

