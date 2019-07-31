import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses = [1, 2, 3, 4, 5];

  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }



  onRegister(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }


    this.userService.registerUser(user).subscribe(data => {
      if(data.success){

       console.log('registered');
       //this.router.navigateByUrl('/login');
      }else{
        console.log('failed register');
       //this.router.navigateByUrl('/register');
      }
  });
  }
}
