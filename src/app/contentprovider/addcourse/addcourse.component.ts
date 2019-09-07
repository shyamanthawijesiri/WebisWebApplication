import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { course } from './addcourse.model';
import { SubcatergoryService } from 'src/app/services/subcatergory.service';
import { CatergoryService } from 'src/app/services/catergory.service';
import { CourseService } from 'src/app/services/course.service';

import { AuthService } from 'angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';




@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
 loadedCatergory: any;
 loadedSubcatergory: any;
 catergory = '';
 fileName = 'Choose File';

   contentForm: FormGroup;

   user: any;
   loggedIn = false;
  constructor(private fb: FormBuilder,
              private subCatergoryService: SubcatergoryService,
              private catergoryService: CatergoryService,
              private courseService: CourseService,
              private http: HttpClient,
              private auth: AuthService) { }

  ngOnInit() {

    this.auth.authState.subscribe((user) => {
      console.log(user);
      localStorage.setItem('token',user.authToken);
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.subCatergoryService.getSubcatergory().subscribe(res =>{
      this.loadedSubcatergory = res;
      console.log(res);

    });

    this.catergoryService.getCatergory().subscribe(res =>{
      this.loadedCatergory = res;
      console.log(res);
    });

    this.contentForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      catergory: ['',Validators.required],
      subCatergory: ['',Validators.required],
      type: ['',Validators.required],
      skillLevel: ['',Validators.required],
      duration: ['', Validators.required],
      topics: this.fb.array([this.fb.group({
        topic:['', Validators.required],
        videos : this.fb.array([new FormControl('',Validators.required)]),
        files: this.fb.array([new FormControl('', Validators.required)])
      })]),

    });


  }

    get topic() {
    return this.contentForm.get('topics') as FormArray;
  }




  addVideos(i){

    const vid = this.topic.at(i).get('videos') as FormArray;
    const file = this.topic.at(i).get('files') as FormArray;
    vid.push(new FormControl('',Validators.required));
    file.push(new FormControl('',Validators.required))

  }

  addFile(i){
    const file = this.topic.at(i).get('files') as FormArray;
    file.push(new FormControl('',Validators.required));
  }
  addTopic(){

    this.topic.push(this.fb.group({
      topic:['', Validators.required],
      videos : new FormArray([new FormControl('',Validators.required)]),
      files : new FormArray([new FormControl('',Validators.required)])
    })
    );
    // ((this.topic.controls[0] as FormGroup).get('videos') as FormArray).push(new FormControl('HELLO',Validators.required));
    console.log(this.contentForm.value);
  }
  onDelete(i: number) {
    (this.contentForm.get('topics') as FormArray).removeAt(i);

  }
  onDeleteFile(i: number){
    (this.topic.at(i).get('files') as FormArray).removeAt(i);
  }
  onDeleteVideo(i: number){
    (this.topic.at(i).get('videos') as FormArray).removeAt(i);
  }

  signInWithGoogle(): void {
    console.log('signin');
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.auth.signOut();
  }



apiKey = 'AIzaSyARlqyYi6ockihl0Qi5MTYO3qjQVwmpfsI';
 upClick(files){
  // if(this.text === 'upload') {
  //   this.text = 'uploaded'
  // }

  // let headers = {
  //   headers: new HttpHeaders()
  //     .set('authorization', 'Bearer ' + localStorage.getItem('token'))
  // };
  // let formData: FormData = new FormData();
  // formData.append('file', files[0]);
  // const url = 'https://www.googleapis.com/upload/youtube/v3/videos?key=' + this.apiKey + '&part=contentDetails,status';
  // this.http.post(url, formData, headers).subscribe(res => {
  //   console.log(res);
  //   console.log(res['id']);
 // const control2 = new FormControl(res['id'], Validators.required);
  // (this.contentForm.get('videoId') as FormArray).push(control2);
  // });

 }
submittest(){
  console.log(this.contentForm.get('name').value);
}




  // upload(){
  //   const control2 = new FormControl('id', Validators.required);
  //   (this.contentForm.get('file') as FormArray).push(control2);
  // }




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

//console.log(this.contentForm.get('type').value)
console.log("course")
console.log(this.contentForm.value);
// this.courseService.Addcourse(this.contentForm.value).subscribe(res => {
//   if(res.state){
//     console.log('add ok')
//     console.log(res);
//   }else{
//     console.log('add failed')
//   }
//   });

}



}
