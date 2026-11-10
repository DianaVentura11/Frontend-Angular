
import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService, Producto } from '../../services/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo implements OnInit {

  productos = signal<Producto[]>([]);
  busqueda = signal('');
  cargando = signal(true);

  productosFiltrados = computed(() =>
    this.productos().filter(producto =>
      producto.title.toLowerCase().includes(
        this.busqueda().toLowerCase()
      )
    )
  );

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {

    this.productoService.obtenerProductos().subscribe({
      next: (respuesta) => {
        this.productos.set(respuesta.products);
        this.cargando.set(false);
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
        this.cargando.set(false);
      }
    });

  }
}
