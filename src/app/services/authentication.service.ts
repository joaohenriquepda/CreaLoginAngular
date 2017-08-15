import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { User } from "../models/index";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }


  login(user: User){
    console.log(user.json());
    return this.http.post('https://jsonplaceholder.typicode.com/users',JSON.stringify(user))
      .map((response: Response) =>{
        let user  = response.json();
        if (user && user.password_digest){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
     }
     
     logout(){
       localStorage.removeItem('currentUser');
     }
    
    }
  
