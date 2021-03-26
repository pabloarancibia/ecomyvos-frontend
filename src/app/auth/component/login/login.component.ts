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

  public errorMessage;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login() {
    console.log('submit');
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      nombreusuario: ['',[Validators.required]],
      password: ['',[Validators.required]],

    })
  }

  signIn() {
    if (this.form.valid) {
      this.usuario = this.form.value;
      this.authService.signIn(this.usuario)
        .subscribe(
          res => {
            console.log(res);
            // localStorage.setItem('token', res.token);
            this.authService.storeUserData(res.token,res.Usuario)
            this.router.navigate(['/inicio']);
          }
        )
    }
  }

}
