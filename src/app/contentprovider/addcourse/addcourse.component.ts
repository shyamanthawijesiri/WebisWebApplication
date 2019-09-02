import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { course } from './addcourse.model';
import { SubcatergoryService } from 'src/app/services/subcatergory.service';
import { CatergoryService } from 'src/app/services/catergory.service';



@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
 loadedCatergory: any;
 loadedSubcatergory: any;
 catergory: any;
//  course = new course();
//    dataArray =[];

   contentForm: FormGroup;


  constructor(private fb: FormBuilder, private subCatergoryService: SubcatergoryService, private catergoryService: CatergoryService) { }

  ngOnInit() {

    this.subCatergoryService.getSubcatergory().subscribe(res =>{
      this.loadedSubcatergory = res;
      console.log(res);
    });
    this.catergoryService.getCatergory().subscribe(res =>{
      this.loadedCatergory = res;
      console.log(res);
    });

    this.contentForm = this.fb.group({
      topic: new FormArray([]),
      file : new FormArray([])
    });


    // this.userForm = new FormGroup({
    //   subTopic: new FormArray([])
    // });


  // set contactlist to the form control containing contacts

  //   this.course = new course();
  //  this.dataArray.push(this.course);
  }

  onDelete(i: number) {
    (this.contentForm.get('topic') as FormArray).removeAt(i);
    (this.contentForm.get('file') as FormArray).removeAt(i);
  }
  onAdd() {
    const control = new FormControl(null, Validators.required);
    const control2 = new FormControl(null, Validators.required);
    (this.contentForm.get('topic') as FormArray).push(control);
    (this.contentForm.get('file') as FormArray).push(control2);
  }





  // addCouse(subTopic: HTMLInputElement){
  //   (<FormArray>this.userForm.get('subTopic')).push(new FormControl(subTopic.value));

  // }
  // deleteCouse(index){
  //   (<FormArray>this.userForm.get('subTopic')).removeAt(index);
  // }

//  editCourse(input1){
//   // this.editTopic=this.userForm.get('subTopic').value[index];
//   // console.log(this.userForm.get('subTopic').value[index])
//   console.log(this.editTopic)
//  }
  // add a contact form group


// remove contact from group






// addForm(){
//   this.course = new course();
//    console.log(this.course)
//    console.log(this.dataArray)
//   this.dataArray.push({name: 'name',
//                        video: 'file',
//                        file:'video'});
// }
// removeForm(index){

// console.log(index)
// //delete this.dataArray[]
// this.dataArray.splice(index,1);
// // for(this.i=0; this.i<index; this.i++){
// //   this.dataArray.push(this.course);
// // }




// }

onSubmit(){
  //console.log(this.userForm.get('subTopic').value)
console.log(this.contentForm.get('topic').value);
console.log(this.contentForm.get('file').value)
}

}
