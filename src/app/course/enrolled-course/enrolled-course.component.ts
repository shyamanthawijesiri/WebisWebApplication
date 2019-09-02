import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent implements OnInit {
  courseId: {id: string};
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.rating.subscribe((res: string) =>{
      this.courseId.id = res;
      console.log('coursedi')
      console.log(res)
    })
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    // alert(`Old Value:${$event.oldValue},
    //   New Value: ${$event.newValue},
    //   Checked Color: ${$event.starRating.checkedcolor},
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);

      const rate = {
        star: $event.newValue
      }

      this.courseService.giveRate(this.courseId.id, rate).subscribe(res =>{
        if(res.state){
          console.log('rate ok');
        }else{
          console.log('rate failed');
        }
      });
      console.log(this.courseId.id);




  }
}


