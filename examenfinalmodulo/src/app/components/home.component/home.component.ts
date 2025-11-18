import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../../models/cubo';
import { Servicecubos } from '../../services/servicecubos';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public cubos:Array<Cubo>;
  constructor(private service:Servicecubos) {
    this.cubos=new Array<Cubo>();
  }
  ngOnInit(): void {
    this.cargarCubos();
  }
  cargarCubos(){
    this.service.getCubos().subscribe(data=>{
      this.cubos=data;
    })
  }
}
