import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductoHttpService } from './servicios/http/producto-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _ProductoHttpService: ProductoHttpService
  ) {}
  ngOnInit() {
    const usuarioCreado$ = this._ProductoHttpService.crear({
      nombre: 'Javier',
      codigo: '1'
    });
    usuarioCreado$.subscribe(
      nuevoUsuario => {
        console.log(nuevoUsuario);
      },
      error => {
        console.log(error);
      }
    );

    //productoUsuario;

    //"http:localhost:1337"+Usuario
    //ESTO NO ES MANTENIBLE
    const url = environment.url + '/Usuario';
    this._httpClient.get(url);
    const listaUsuarios$ = this._httpClient.get(url);
    listaUsuarios$.subscribe(
      (datos: any) => {
        console.log(datos);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
