import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurent';
}
const loginForm = new FormGroup({
  user: new FormControl('', [Validators.required]),
  password: new FormControl(''),
})
// loginUser()
// {
//   console.warn(this.loginForm.value)
// }
// get user()
// {
//   return this.loginForm.get('user');
// }



