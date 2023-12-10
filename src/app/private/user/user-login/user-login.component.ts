
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  miRouterLink = '#';
  constructor(private fb: FormBuilder) {}
  
  
  loginForm = this.fb.group({
  
      correo: ["", [Validators.required, Validators.email]],
      contraseña: ["", Validators.required]
    
    })

    // creando  la validacion  del boton
  __onSubmitLogin() {
    
    if(this.loginForm.valid) {
      console.log(this.loginForm.value)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logeado',
        showConfirmButton: false,
        timer: 2000 ,
      
      })
    
      window.location.href = 'inicio'
      

    } 

    else {
      Swal.fire({

        icon: 'error',
        title: 'Oops...',
        text: 'Correo  o Contraseñas No valido!',

        
      })
    }
  }

}
