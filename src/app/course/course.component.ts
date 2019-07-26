import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: {id: string}
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.course = {
      id: this.activatedRoute.snapshot.paramMap.get('id')
    };
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.course.id = params['id'];
      }
    );

  }




}
