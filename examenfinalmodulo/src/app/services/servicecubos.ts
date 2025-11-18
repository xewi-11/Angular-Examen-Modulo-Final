
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Cubo } from '../../models/cubo';

@Injectable({
  providedIn: 'root',
})
export class Servicecubos {
   constructor(private http: HttpClient) {  }
   
   getCubos():Observable<Cubo[]>{

    return this.http.get<Cubo[]>(environment.urlCubos+'api/cubos');
   }
   getMarcas():Observable<any>{

    return this.http.get(environment.urlCubos+'api/cubos/marcas');
   }
  getcuboByMarca(nombre:string):Observable<Cubo[]>{
    return this.http.get<Cubo[]>(environment.urlCubos+'api/Cubos/CubosMarca/'+nombre);
   }
    loginUser(correo: string, contrasena: string): Observable<any> {
    const body = {
        email: correo,
        password: contrasena,
    };
    return this.http.post<any>(environment.urlCubos + 'api/Manage/Login', body).pipe(
        tap((response) => {
            if (response && response.token) {
                localStorage.setItem('token', response.token);
            }
        })
    );
  }
  getUserByToken(): Observable<any> {
    const token = localStorage.getItem('tokenUser');
    if (!token) {
        throw new Error('Token no encontrado');
    }
    let header = new HttpHeaders();
    header = header.set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(environment.urlCubos + 'api/Manage/PerfilUsuario', { headers: header });
  }
  getComprasUser(){
    const token = localStorage.getItem('tokenUser');
    if (!token) {
        throw new Error('Token no encontrado');
    }
    let header = new HttpHeaders();
    header = header.set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(environment.urlCubos + 'api/Compra/ComprasUsuario', { headers: header });
  }
  realizarCompra(cuboid:number)
{
    const token = localStorage.getItem('tokenUser');
    let header = new HttpHeaders();
    if (token) {
        header = header.set('Authorization', `Bearer ${token}`);
    }
    let request='api/Compra/InsertarPedido/'+cuboid;
    let cubos=new Array<any>();
     this.getCubos().subscribe(data=>{
        cubos=data;
    });
    let Cubo=cubos.find(c=>c.id==cuboid);

    return this.http.post(environment.urlCubos + request, Cubo, { headers: header });
}}
