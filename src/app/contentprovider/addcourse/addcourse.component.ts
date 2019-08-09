import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { course } from './addcourse.model';



@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

 course = new course();
   dataArray =[];

   questionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.questionForm = this.fb.group({
      mcq: new FormArray([]),
    });


    // this.userForm = new FormGroup({
    //   subTopic: new FormArray([])
    // });


  // set contactlist to the form control containing contacts

  //   this.course = new course();
  //  this.dataArray.push(this.course);
  }

  onDeleteMcq(i: number) {
    (<FormArray>this.questionForm.get('mcq')).removeAt(i);
  }
  onAddMcq() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.questionForm.get('mcq')).push(control);
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
console.log(this.questionForm.value);
}

}
