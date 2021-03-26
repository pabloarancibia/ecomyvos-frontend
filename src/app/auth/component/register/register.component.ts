import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form: FormGroup;


  
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
    this.form = this.formBuilder.group({
      nombreusuario: ['',[Validators.required]],
      password: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      cuil: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      genero: ['',[Validators.required]],
      fechanacimiento: ['',[Validators.required]],
      nombrerol:['alumno']

    })
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
          this.authService.storeUserData(res.token,res.Usuario)
          this.router.navigate(['/inicio'])
        },
        err => {
          console.log(err)
        }
      )
    }
    // this.authService.signUp(this.usuario)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate(['/inicio'])
    //     },
    //     err => {
    //       console.log(err)
    //     }
    //   )
  }


}
