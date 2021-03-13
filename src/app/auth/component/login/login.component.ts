import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  usuario = {
    nombreusuario: '',
    password: ''
  };

  constructor(
    // private formBuilder: FormBuilder,
    // private router: Router,
    private authService: AuthService,
    private router: Router

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

  signIn() {
    this.authService.signIn(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/inicio']);
        },
        err => {
          console.log(err)
        }
      )
  }

}
