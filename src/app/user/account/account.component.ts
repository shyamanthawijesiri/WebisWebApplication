import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  selectedFile = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }



}
