import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subcourses } from '../subcourse.model';
import { SubcourseService } from '../services/subcourse.service';


@Component({
  selector: 'app-displaycourses',
  templateUrl: './displaycourses.component.html',
  styleUrls: ['./displaycourses.component.css']
})
export class DisplaycoursesComponent implements OnInit {
  loadedSubCourses: Subcourses[];
   course1: {id: string };
   maincourses = ['node', 'js','angular','phython','springboot','jsp'];
  courses = [1, 2, 3 , 4, 5 ]

  constructor(private route: ActivatedRoute, private subCourseService: SubcourseService ) { }

  ngOnInit() {
    this.loadedSubCourses = this.subCourseService.subcourses;
    this.course1 = {
      id: this.route.snapshot.params['id']
    };
    this.route.params.subscribe(
      (params: Params) => {
        this.course1.id = params['id'];
      }
    )

  }

}
