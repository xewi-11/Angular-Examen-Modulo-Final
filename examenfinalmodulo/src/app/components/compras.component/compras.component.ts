import { Component, OnInit } from '@angular/core';
import { Servicecubos } from '../../services/servicecubos';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-compras.component',
  imports: [],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class ComprasComponent implements OnInit {
  public compras: Array<any>;
  private tokenUser=localStorage.getItem('tokenUser');
  constructor(private service: Servicecubos, private route: Router) {
    this.compras = new Array<any>();
  }
  ngOnInit(): void {
    this.cargarCompras();
    if(!this.tokenUser){
        this.route.navigate(['/login']);
    }
  }
  cargarCompras() {
    this.service.getComprasUser().subscribe((data) => {
      this.compras = data;
    });
  }
  irARealizarPedido() {
    this.route.navigate(['/pedidos']);
  }
}
