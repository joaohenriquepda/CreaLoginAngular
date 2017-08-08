import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
      {
      path: 'register',
      component: RegisterComponent
    },
    // otherwise redirect to home
    { 
      path: '**', 
      redirectTo: '' 
    },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
