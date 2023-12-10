import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {
  
  constructor(private fb: FormBuilder) {}
  
  
contactusForm = this.fb.group({
  
    nombre: ["", Validators.required],
    correo: ["", [Validators.required, Validators.email]],
    mensaje: ["", Validators.required]
  
  })

  __onSubmitContactus() {
    
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value)
      Swal.fire(
        
        'Gracias Por Contactarnos',
        'Te llegara la respuesta a tu correo',
        'success'
        
      )
      
     
     

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos No validos!',
        
      })
    }
  }
 
  
}
