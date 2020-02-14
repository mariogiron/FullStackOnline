import { Producto } from '../models/producto';
import { ProductosService } from './../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listaProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    // this.productosService.getAll()
    //   .then(pArrProductos => {
    //     this.listaProductos = pArrProductos;
    //   });

    this.productosService.getByPrecio(1000)
      .then(pArrProductos => {
        this.listaProductos = pArrProductos;
      });
  }

  async manejarChange($event) {
    this.listaProductos = await this.productosService.getByCategory($event.target.value);
  }

  async manejarClick(producto) {
    if (!localStorage.getItem('token_carrito')) {
      const response = await this.productosService.createCart();
      localStorage.setItem('token_carrito', response['token_cart']);
    }
    const result = await this.productosService.addProducto(producto.id);
    console.log(result);
  }

}
