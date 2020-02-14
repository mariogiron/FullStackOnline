import { Producto } from './../models/producto';
import { ProductosService } from './../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listaProductosComprados: Producto[];

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.listaProductosComprados = await this.productosService.getProductosCarrito();
  }

}
