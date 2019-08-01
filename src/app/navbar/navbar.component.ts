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

  userId: any;
  pass: any;
  userImg:any;

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



    //get user image
    this.userId = localStorage.getItem('user');
     this.pass = JSON.parse(this.userId)





    this.userService. getImage(this.pass.id).subscribe(response => {
      this.userImg=response;

      console.log(response);
    });
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
      email: this.email,
      password: this.password
    }


    this.userService.authenticateUser(user).subscribe(data => {
        if (data.success) {
         // this.userService.storeUserData(data.token,data.user);
            console.log('succussful login');
            this.router.navigateByUrl('/account');
            this.userService.storeUserData(data.token, data.user);
            this.userId = data.user;
            this.userService.uploadImg.emit(this.userId);
            this.userImg = this.pass.imageURL;
            console.log(data.user);


        } else {
          console.log('error login');
        //this.router.navigate(['login']);
        }



      });

  }
  onLogout(){
    this.userService.logout();
    this.userImg=null;
  }


}
