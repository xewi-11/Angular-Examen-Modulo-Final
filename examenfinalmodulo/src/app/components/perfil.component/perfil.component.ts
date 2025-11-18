import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Servicecubos } from '../../services/servicecubos';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-perfil.component',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
 public user!:User;
private tokenUser=localStorage.getItem('tokenUser');

 constructor(private service:Servicecubos,private route:Router){

 }
 ngOnInit(): void {
    this.cargarPerfil();
     if(!this.tokenUser){
        this.route.navigate(['/login']);
    }
 }
 cargarPerfil(){
  console.log(environment.tokenUser);
   this.service.getUserByToken().subscribe((data)=>{
    this.user=data;
   });
 }
 irACompras(){
    this.route.navigate(['/compras']);
 }
}
