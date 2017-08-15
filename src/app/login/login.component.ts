import { Component, OnInit } from '@angular/core';
import { MdButtonModule,MdInputModule } from '@angular/material';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import { AuthenticationService } from '../services/index'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  constructor(
    private fb: FormBuilder
  ) { 
    this.loginForm = fb.group({
      'email':[null,Validators.compose([Validators.required, Validators.email])],
      'password':[null,Validators.compose([Validators.required])]
     })


  }

  ngOnInit() {
  }

}
