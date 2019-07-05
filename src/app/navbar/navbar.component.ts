import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loadedCourses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    console.log("navbar")
    this.loadedCourses = this.courseService.courses;
  }

}
