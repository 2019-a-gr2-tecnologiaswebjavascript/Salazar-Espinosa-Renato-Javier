// clase que tenga implemetados los metoso y la logica para los RESTFUL

//2. eXTENDEMOS ESA CLASE
//USARLA

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export class HttpSailsPrincipal <ClaseEntidad> {
         protected url: string = 'http://localhost:1337';

         protected modelo: string = "";//para los modulos
            
constructor(protected  readonly httpClient:HttpClient,
 url:string,
 modelo:string ){
this.url=url,
    this.modelo=modelo,
 }

crear(nuevoRegistro:ClaseEntidad):Observable<ClaseEntidad> {
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
                    .post(url, nuevoRegistro)
                    .pipe(
                        map(
                            (datos)=>{
                                return datos as ClaseEntidad;
                        })
                    );
    }

    

         //crear
         //borrar
         //actualiazr
         //buacar por id
         //buscar todos
       }