import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    // private formBuilder: FormBuilder,
    // private router: Router,

  ) {
    // this.buildForm();
  }

  ngOnInit(): void {
  }

  // login(event: Event){
  //   event.preventDefault();
  //   if (this.form.valid) {
  //     const value = this.form.value;
  //   }
  // }

  login() {
    console.log('submit');
  }

}
