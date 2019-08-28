import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-recent-added-course',
  templateUrl: './recent-added-course.component.html',
  styleUrls: ['./recent-added-course.component.css']
})
export class RecentAddedCourseComponent implements OnInit {
   denyCourse: any;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getDenyPermissionCourse().subscribe(res =>{
      this.denyCourse = res;
     console.log(res);
    })
  }

  givePermission(id: string){
    const permission = {
      value: true
    }
    this.courseService.givePermission(permission, id).subscribe(res =>{
      if(res.state){
        console.log('course accept');
      }else{
        console.log('rejected');
      }
    })
  }

}
