import { Component, OnInit } from '@angular/core';
import { CatergoryService } from '../services/catergory.service';
import { SubcatergoryService } from '../services/subcatergory.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private catergoryService: CatergoryService,private subCatergoryService: SubcatergoryService) { }
   loadedCatergory:any;
   loadedSubcatergory:any;

   catergory: string;
   changeCatergory: string;
   subCatergory: any;


    whenClicked = [false];
    whensub = [false, false];

  ngOnInit() {

    this.catergoryService.getCatergory().subscribe(res =>{
      this.loadedCatergory = res;
      console.log(res);
    });

    this.subCatergoryService.getSubcatergory().subscribe(res =>{
      this.loadedSubcatergory = res;
      console.log(res);
    });

  }

  addCatergory(){
    const catergory = {
      catergoryName: this.catergory
    }
    this.catergoryService.addCatergory(catergory).subscribe(res => {
      if(res.state){
        console.log('added successfully');
      }else{
        console.log('failed');
      }
    })
    console.log(this.catergory);
  }

  addSubcatergory(){
    const subCatergory = {
      catergoryName: this.catergory,
      subCatergoryName: this.subCatergory
    }
    this.subCatergoryService.addSubcatergory(subCatergory).subscribe(res =>{
      if(res.state){

        console.log('successfully add subcatergory');
      }else{
        console.log('failed');

      }
    })
    //console.log(this.subcatergoryForm.get('name').value);

  }

  deleteSubcatergory(subCatergory: string){
    this.subCatergoryService.deleteSubcatergory(subCatergory).subscribe((res:any) =>{
      if(res.state){
        console.log('delete Ok')
      }else{
        console.log('delete failed')
      }
    });

  }

  deleteCatergory(catergory: string){
    this.catergoryService.deleteCatergory(catergory).subscribe((res:any) =>{
      if(res.state){
        console.log('delete Ok')
      }else{
        console.log('delete failed')
      }
    });

  }

  updateCatergory(id: string){
    const catergory ={
      catergoryName: this.changeCatergory
    }
    this.catergoryService.updateCatergory(catergory,id).subscribe(res =>{
      if(res.state){
        console.log('update ok');
      }else{
        console.log('update failed');
      }
    })

  }


tracked(item, index){
  return index;
}
}
