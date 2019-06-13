import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycourses',
  templateUrl: './displaycourses.component.html',
  styleUrls: ['./displaycourses.component.css']
})
export class DisplaycoursesComponent implements OnInit {
   courses = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit() {
  }

}
