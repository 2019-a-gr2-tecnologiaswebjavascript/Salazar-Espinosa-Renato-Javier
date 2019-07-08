import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductoHttpService } from './servicios/http/producto-http.service';
import { UsuarioHttpService } from './servicios/http/usuario-http.service';
import { ProductoUsuarioHttpService } from './servicios/http/producto-usuario-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';
  archivo: File;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _usuarioHttpService: UsuarioHttpService,
    private readonly _productoHttpService: ProductoHttpService,
    private readonly _productoUsuarioHttpService: ProductoUsuarioHttpService
  ) {}

  ngOnInit() {
    const usuarioCrear$ = this._usuarioHttpService.crear({
      nombre: 'Felipe',
      apellido: 'Caicedo',
      cedula: '1718137159',
      correo: 'eadepto@hotmail.com',
      estaCasado: false,
      username: 'adrianeguez',
      sueldo: 120,
      tipoUsuario: 'normal'
    });

    usuarioCrear$.subscribe(
      nuevoUsuario => {
        console.log(nuevoUsuario);
      },
      error => {
        console.log(error);
      }
    );

    const productoCrear$ = this._productoHttpService.crear({
      nombre: 'Lavadora',
      codigo: '2547'
    });
    productoCrear$.subscribe(
      nuevoProducto => {
        console.log(nuevoProducto);
      },
      error => {
        console.error(error);
      }
    );

    const productoUsuarioCrear$ = this._productoUsuarioHttpService.crear({
      cantidad: 25,
      fkProducto: 1,
      fkUsuario: 1
    });

    productoUsuarioCrear$.subscribe(
      nuevoProductoUsuario => {
        console.log(nuevoProductoUsuario);
      },
      error => {
        console.error(error);
      }
    );

    const url = environment.url + '/Usuario';
    //this._httpClient.get(url);
    const listaUsuarios$ = this._httpClient.get(url);
    listaUsuarios$.subscribe(
      datos => {
        console.log(datos);
      },
      error => {
        console.log(error);
      }
    );
  }
  seleccionarArchivo(evento) { //VAMOS A recibir el EVENTO
    const listaArchivos: FileList = evento.target.files;


    const validaciones = { existeArchivo: listaArchivos.length > 0 };
    if (validaciones.existeArchivo) {
      const archivo = listaArchivos[0];
      console.log(archivo);
      this.archivo = archivo; //guardamos el archivo
      const nombre = archivo.name;

    }
  }

  enviarArchivo() {
    const producto$ = this._productoHttpService.cargarArchivo(this.archivo, 1);
    producto$.subscribe(datos => {
       console.log(datos);
    }, error => {
         console.log(error);
    });

}

}

//  createdAt?: number;
//   updatedAt?: number;
//   id?: number;
//   nombre: string;
//   apellido: string;
//   cedula: string;
//   username: string;
//   sueldo?: number;
//   estaCasado?: boolean;
//   tipoUsuario?: 'normal' | 'pendiente' | 'premium';
//   correo?: string;
//   arregloProductosUsuario?: any[];

// export interface Producto {
//   createdAt?: number;
//   updatedAt?: number;
//   id?: number;
//   nombre: string;
//   codigo: string;
//   arregloProductosUsuario?: any[];
