import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'


import { User } from '../models/index'

@Injectable()
export class UserService {

  constructor(private http : Http) { }

   getAll(){
     return this.http.get('http:localhost:3000/users', this.jwt()).map((response : Response)=> response.json());
   }

   create(user: User){
     return this.http.post('localhost:3000/users',user, this.jwt()).map((response : Response) => response.json()); 
 
   }


  private jwt(){
    //create authorization
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
      let headers = new  Headers({'Authorization':'Bear' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  } 

}
