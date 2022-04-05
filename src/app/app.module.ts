import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
// import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { MatSliderModule } from '@angular/material/slider';
// import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

// import { GMapModule } from 'primeng/gmap';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentComponent,
    LoginComponent,
    SignupComponent,
    // LoginComponent,
    // SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgbModule,
    BrowserAnimationsModule,
    // MatSliderModule,
    // MatButtonModule,
    // ReactiveFormsModule,
    // NgbModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    // GMapModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }