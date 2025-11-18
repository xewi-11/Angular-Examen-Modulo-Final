import { ChangeDetectorRef, Component, computed, OnChanges, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Servicecubos } from '../../services/servicecubos';
import { LoginComponent } from "../login.component/login.component";
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit, OnChanges {

 public marcas:Array<string>;
 public tokenUser=computed(()=>{
    return environment.tokenUser;
 });
 constructor(private service:Servicecubos,private route:Router,private cdr:ChangeDetectorRef){
    this.marcas=new Array<string>();
 }
  ngOnInit(): void {
    this.cargarMarcas();
     this.cdr.detectChanges();
  }
  ngOnChanges(): void {
    this.cdr.detectChanges();
    this.detectarActuaizacionToken();
  }
 cargarMarcas(){
    this.service.getMarcas().subscribe(data=>{
      this.marcas=data;
    })
 }
 cerrarSesion(){
    localStorage.removeItem('tokenUser');
    this.route.navigate(['/']);
 }
 detectarActuaizacionToken(){
    this.tokenUser();
 }


}
