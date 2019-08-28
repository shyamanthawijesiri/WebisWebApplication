import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subcourses } from '../subcourse.model';
import { SubcourseService } from '../services/subcourse.service';
import { CourseService } from '../services/course.service';
import { Course } from '../course.model';
import { EventEmitter } from 'events';
import { StarRatingComponent } from 'ng-starrating';

import { MatCheckbox } from '@angular/material'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-displaycourses',
  templateUrl: './displaycourses.component.html',
  styleUrls: ['./displaycourses.component.css']
})
export class DisplaycoursesComponent implements OnInit {
  loadedSubCourses:any // Subcourses[];
  loadedCourseVideo: any
  loadedCourseVideosub: any



  mainCourse: { id: string }
  subCourse: {id: string}


  constructor(private activatedRoute: ActivatedRoute, private subCourseService: SubcourseService, private courseService: CourseService ) { }

  ngOnInit() {

    // get activated route main course

    this.mainCourse = {
      id: this.activatedRoute.snapshot.paramMap.get('catergory')
    };
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.mainCourse.id = params['catergory'];
      }
    );

    //get activated route subcourse
    this.subCourse = {
      id: this.activatedRoute.snapshot.paramMap.get('subCatergory')
    };
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.subCourse.id = params['subCatergory'];
      }
    );

      // display sub courses
    this.subCourseService. getSubcourses(this.mainCourse.id).subscribe(response => {
      this.loadedSubCourses=response;

      console.log(response);
    });


    this.subCourseService.courseUpdate.subscribe(
      (course: string)=>{
      this.loadedSubCourses=course;
      console.log(this.loadedSubCourses);
      }

    );
    console.log('ssssssssssssssss');
    console.log(this.loadedSubCourses);

    //display videos

    this.courseService.getCourseVideos(this.mainCourse.id).subscribe(response =>{
      this.loadedCourseVideo=response;
      console.log(response);
    });

    this.courseService.courseVideoUpdate.subscribe(
      (courseVideos: string) => {
        this.loadedCourseVideo=courseVideos;
      }
    );

    //display videos according to sub catergories

    this.courseService.getCourseVideossub(this.mainCourse.id,this.subCourse.id).subscribe(response =>{
      this.loadedCourseVideosub=response;
      console.log("subcourese");
      console.log(response);
    });


  }

  //display videos according to sub catergories
  onSubCourse(mCourse: string, sCourse: string){
    this.courseService.getCourseVideossub(mCourse,sCourse).subscribe(response =>{
      this.loadedCourseVideosub=response;
      console.log("subcourese");
      console.log(this.subCourse.id);
      console.log(response);
    });
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);

  }
  @ViewChild('myCheckbox') private myCheckbox: MatCheckbox;
   name: string;
   checkedval = true;
  onChecked() {
   // this.x =(<> document.getElementById('free')).value;
  if (this.checkedval) {

    this.name = this.myCheckbox.value;
  // console.log((<HTMLInputElement> document.getElementById('free')));
    console.log(this.name);
    this.checkedval = false;
  } else {
    this.name = null;
    this.checkedval = true;
  }
   }

}

