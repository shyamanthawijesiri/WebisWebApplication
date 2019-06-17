import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  courses = [1, 2, 3, 4, 5];
  coursessub =[10, 9, 8, 7, 6];
  constructor() { }

  ngOnInit() {
  }

}
