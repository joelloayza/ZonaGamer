import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private fb: FormBuilder) {}
  
  
  registerForm = this.fb.group({

      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      contraseña: ["", Validators.required]
    
    })

    // creando  la validacion  del boton
  __onSubmitRegister() {
    
    if(this.registerForm.valid) {
      console.log(this.registerForm.value)

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registrado',
        showConfirmButton: false,
        timer: 2000

      })
      window.location.href = 'acceso'
 

    } else {
      Swal.fire({

        icon: 'error',
        title: 'Oops...',
        text: 'Datos erroneos vuelva intentar',

        
      })
    }
  }


}
