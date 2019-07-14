import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//restFul ==> metodos son =
//para no estar copiando y pegando los metodos
//vamos a implemetar una clase --> que contenga Métodos y la lógica
//luego vamos a exterder esa clase y usarla

export class HttpSailsPrincipal<ClaseEntidad> {
  protected url: string = 'http://localhost:1337'; //dato qiemado
  protected modelo: string = ''; ///loquesea
  constructor(protected readonly httpCliente: HttpClient, url: string, modelo: string) {
    this.url = url;
    this.modelo = modelo;
  }
  //método crear
  crear(nuevoRegistro: ClaseEntidad): Observable<ClaseEntidad> {
    const url = `${this.url}${this.modelo}`;
    return this.httpCliente.post(url, nuevoRegistro).pipe(
      map(datos => {
        return datos as ClaseEntidad;
      })
    );
  }

  //crear
  //borrar
  //actualizar
  //buscar id
  //buscar todos
  //1 hora de video :)
}
