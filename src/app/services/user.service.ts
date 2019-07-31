import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //register user
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register',user,{headers:headers}).pipe(map((res:any)=>res));
  }
  //login user
  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user,{headers:headers}).pipe(map((res:any)=>res));
  }

  //image upload
  uploadImage(selectedFile: File){
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    //this.http.post("http://localhost:3000/users/uploadUserImage/");
  }
}
