import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Servicecubos } from '../../services/servicecubos';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos.component',
  imports: [FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent implements OnInit {
  @ViewChild('selectedCubo') selectedCubo: any;

  public cubos: Array<any>;
  constructor(private service: Servicecubos, private route: Router) {
    this.cubos = new Array<any>();
    this.selectedCubo = new ElementRef(0);
  }
  ngOnInit(): void {
    this.cargarCubos();
  }
  cargarCubos() {
    this.service.getCubos().subscribe((data) => {
      this.cubos = data;
    });
  }
realizarCompra() {
    const cuboId = this.selectedCubo.nativeElement.value;
    if (!cuboId) {
        alert('Por favor, seleccione un cubo.');
        return;
    }
    this.service.realizarCompra(cuboId).subscribe((data) => {
        alert('Compra realizada con éxito');
        this.route.navigate(['/compras']);
    });
}
}