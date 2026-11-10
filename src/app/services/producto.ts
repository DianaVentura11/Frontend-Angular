
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<{ products: Producto[] }> {
    return this.http.get<{ products: Producto[] }>(this.apiUrl);
  }

  obtenerProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }

}
