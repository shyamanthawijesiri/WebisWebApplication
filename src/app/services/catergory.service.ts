import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatergoryService {

  constructor(private http: HttpClient) { }


  getCatergory(){
    return this.http.get('http://localhost:3000/catergory/display');
  }
}
