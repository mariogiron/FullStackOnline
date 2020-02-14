import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = 'http://ejercicios.mariogiron.com/shop';
    this.baseUrl = 'https://neoland.ngrok.io/items';
  }

  getAll(): Promise<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl).toPromise();
  }

  getByCategory(pCategory: string): Promise<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/${pCategory}`).toPromise();
  }

  getByPrecio(pPrecio: number): Promise<Producto[]> {
    return new Promise(async (resolve, reject) => {
      const productos = await this.getAll();
      const arrFiltrado = productos.filter(producto => {
        return parseInt(producto.price, 10) > pPrecio;
      });
      resolve(arrFiltrado);
    });
  }

  createCart() {
    return this.http.post(`${this.baseUrl}/newcart`, {}).toPromise();
  }

  addProducto(pProductoId) {
    const body = {
      item_id: pProductoId
    }
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem('token_carrito')
      })
    }
    return this.http.post(`${this.baseUrl}/new`, body, httpOptions).toPromise();
  }

  getProductosCarrito(): Promise<Producto[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': localStorage.getItem('token_carrito')
      })
    }
    return this.http.get<Producto[]>(`${this.baseUrl}/cart`, httpOptions).toPromise();
  }

}


/*
  PARA COMPRAR UN PRODUCTO
  - Si pulso en comprar producto
    1- Comprobar si el carrito está creado -> LocalStorage X
      1.1 - Si no está creado, debo crearlo X
    2- Agrego el producto al carrito X
*/

/*
PARA RECUPERAR LOS PRODS DEL CARRITO

*/