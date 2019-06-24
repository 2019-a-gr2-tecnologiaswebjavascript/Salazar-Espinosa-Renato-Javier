import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _UsuarioHttpService: UsuarioHttpService
  ) {}
  ngOnInit() {
    productoUsuario;

    //"http:localhost:1337"+Usuario
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
