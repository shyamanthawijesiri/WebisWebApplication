import { Component, OnInit } from '@angular/core';
import { CatergoryService } from '../services/catergory.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   loadedCatergory:any;
  constructor(private catergoryService: CatergoryService) { }

  ngOnInit() {

    this.catergoryService.getCatergory().subscribe(res =>{
      this.loadedCatergory = res;
      console.log(res);
    })
  }

}
