import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../../models/cubo';
import { Servicecubos } from '../../services/servicecubos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marcas.component',
  imports: [],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css',
})
export class MarcasComponent implements OnInit {
  public cubos: Array<Cubo>;
  constructor(private service: Servicecubos, private route: ActivatedRoute) {
    this.cubos = new Array<Cubo>();
  }
  getCubosInfo() {
     this.route.params.subscribe((params) => {
      const marca = params['marca'];
      this.service.getcuboByMarca(marca).subscribe((data) => {
        this.cubos = data;
      });
    });
  }
  ngOnInit() {
    this.getCubosInfo();
  }
}
