import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  loadedCourse: any;
  course: {id: string}
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.course = {
      id: this.activatedRoute.snapshot.paramMap.get('id')
    };
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.course.id = params['id'];
      }
    );
    // this.courseService.courseDetail.subscribe(
    //   (course: string)=>{
    //   this.loadedSubCourses=course;
    //   }
    // );
    //get course details
    this.courseService.displaycourse(this.course.id).subscribe(response =>{
      this.loadedCourse=response;
    })


  }




}
