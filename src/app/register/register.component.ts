import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router'; 
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';


import { UserService } from '../services/index'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any={};
  loading = false;
  registerForm: FormGroup;




  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    console.log("aqui");
    this.userService.getAll().subscribe(
      data =>{
        console.log(data);
        
      },
      erro=>{
      console.log(erro.json());
      
    })


    this.registerForm =  this.fb.group({
      username:'',
      password:'',
      password_confirmation: '',
      email: '',
    })
  }

  register(){
    console.log("aqui");
    
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data=>{
          console.log(data.json);
          this.router.navigate(['/login']);
         }, 
        erro=>{
          console.log(erro.json());
          this.loading = false;
        }
      );
  }

  createGroup


}
