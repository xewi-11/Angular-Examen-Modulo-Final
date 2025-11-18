import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Servicecubos } from '../../services/servicecubos';
import { Route, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('cajaEmail') cajaEmail: any;
  @ViewChild('cajaPassword') cajaPassword: any;
  @Output() updatetoken=new EventEmitter<string>();
  constructor(private service:Servicecubos,private route:Router){
     this.cajaEmail=new ElementRef('');
      this.cajaPassword=new ElementRef('');
  }
  IniciarSesion(){
    const email=this.cajaEmail.nativeElement.value;
    const password=this.cajaPassword.nativeElement.value;
     this.service.loginUser(email,password).subscribe(data=>{
        localStorage.setItem('tokenUser',data.response);
        alert('Login correcto');
        console.log('Token recibido:', data.response); // Depuración
        this.route.navigate(['/']);
     });
  }
 
}
