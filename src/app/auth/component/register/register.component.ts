import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, NgForm, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return control.parent.errors && control.parent.errors['notSame'];
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form: FormGroup;
  matcher = new MyErrorStateMatcher();



  
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,

  ) { 
    this.buildForm();
  }

  ngOnInit(): void {

  }

  private buildForm(): void {
    this.form = this.formBuilder.group(
      {
      nombreusuario: ['',[Validators.required]],

      password: ['',[Validators.required]],
      confirmPassword: [''],

      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      cuil: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      genero: ['',[Validators.required]],
      fechanacimiento: ['',[Validators.required]],
      nombrerol:['alumno']



    },
     { validator: this.checkPasswords }
    );
  }

  signUp() {
    if (this.form.valid){
      const persona = this.form.value;
      // this.persona.push({nombrerol:this.rolusuario});
      console.log(persona);
      // console.log(this.rolusuario);

      this.authService.signUp(persona)
      .subscribe(
        res => {
          console.log(res);
          // this.authService.storeUserData(res.token,res.Usuario)
          this.router.navigate(['/auth/login'])
        },
        err => {
          console.log(err)
        }
      )
    }
    
  }


  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
  
    return password === confirmPassword ? null : { notSame: true }     
  }


}
