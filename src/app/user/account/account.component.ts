import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  selectedFile: File = null;
  userId: any;
  userImg: any;
  pass: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('user');
     this.pass = JSON.parse(this.userId)





    this.userService. getImage(this.pass.id).subscribe(response => {
      this.userImg=response;

      console.log(response);
    });


    // this.userService.uploadImg.subscribe(
    //   (userId: string)=>{
    //   this.userId=userId;
    //   }
    // );

  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  uploadImage1(){
    this.userService.uploadImage(this.selectedFile,this.pass.id);
  }

}
