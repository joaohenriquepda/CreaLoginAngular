import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router'; 
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import { User } from '../models/index'
import { UserService } from '../services/index'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User;
  loading = false;
  registerForm: FormGroup;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,

  ) { 
    this.registerForm = fb.group({
      'username':[null, Validators.required] ,
      'password':[null,Validators.compose([Validators.required])],
      'password_confirmation': [null,Validators.required],
      'email': [null,Validators.compose([Validators.email,Validators.required])]
    })
  }

  ngOnInit() {
    console.log("aqui");
    this.userService.getAll().subscribe(
      data =>{
        // console.log(data);
       },
      erro=>{
      console.log(erro.json());
    })
  }

  register(user: User){
    console.log(user);
    this.model = user;   
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/login']);
         }, 
        erro=>{
          console.log(erro.json());
          this.loading = false;
        }
      );
  }
}
