import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';

import { UserService } from './services/index';
import { AuthGuard } from './guards/auth.guard'

import { MdButtonModule, MdInputModule } from '@angular/material';
import { BaseRequestOptions } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdButtonModule,
    HttpModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    AuthGuard,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
