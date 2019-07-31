import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../services/course.service';
import { SubcourseService } from '../services/subcourse.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //login
  email: string;
  password: string;

  //sign up
  firstName: string;
  lastName: string;





  loadedCourses: any //Course[];
  loadedSubCourses: any
  loadedCourseVideo: any


  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private subCourseService: SubcourseService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    console.log("navbar");


    this.courseService.getCourses()
    .subscribe(response => {
      this.loadedCourses=response;


    });
    console.log(this.loadedCourses);




  }
  // subcatergory update
   onSelect(courseName: string){
    this.subCourseService. getSubcourses(courseName).subscribe(response => {
      this.loadedSubCourses=response;
      this.subCourseService.courseUpdate.emit(this.loadedSubCourses);


    });
    // main catergory video update
    console.log(courseName);
    this.courseService.getCourseVideos(courseName).subscribe(response =>{
      this.loadedCourseVideo=response;
      this.courseService.courseVideoUpdate.emit(this.loadedCourseVideo);
    });
   }
  // clickSubCatergories(){
  //   this.loadedSubCourses = this.subCourseService. getSubcourses(this.course2.id).subscribe(response => {
  //     this.loadedCourses=response;
  //     console.log(response);

  //   });
  //}

  onLogin(){
    const user = {
      username: this.email,
      password: this.password
    }


    this.userService.authenticateUser(user).subscribe(data => {
        if (data.success) {
            console.log('succussful login');
            //.router.navigate(['categories']);
          //  this.authService.storeUserData(data.token, data.user);

        } else {
          console.log('error login');
        //this.router.navigate(['login']);
        }



      });

  }


}
