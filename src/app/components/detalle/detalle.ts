import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService, Producto } from '../../services/producto';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle implements OnInit {

  producto = signal<Producto | null>(null);

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productoService.obtenerProducto(id).subscribe({
      next: (respuesta) => {
        this.producto.set(respuesta);
      },
      error: (error) => {
        console.error('Error al consultar producto:', error);
      }
    });
  }
}