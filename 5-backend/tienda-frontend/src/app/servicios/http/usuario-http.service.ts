import { HttpSailsPrincipal } from './http-sails-principal';

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../dto/usuario';

@Injectable()
export class UsuarioHttpService extends HttpSailsPrincipal<Usuario> {
  constructor(private readonly _httpClient: HttpClient) {
    super(_httpClient, environment.url, '/Usuario');
  }
}

//TIPOS DE BUSQUEDA QUE SE PUEDEN REALIZAR en sails

//1)Buescar usuario nombre 'Javier'
//http://Localhost:137/Usuario?nombre=JAVIER

//2Buescar usuario nombre 'Javier' Y LA CEDULA '1001005022'
//http://Localhost:137/Usuario?nombre=Javier & cedula=1001005022
//si se pasa d elos 30 registros , toca mepezar a pagianr

//3) Trae los 3 priemros usauario
//http://Localhost:137/Usuario?nombre=JAVIER
//http://localhost:1337/ProductoUsuario?limit=3

//) como pagino??
//http://localhost:1337/ProductoUsuario?limit=1&skip=2
//4) Traer los 3 priemros usuarios despues de los 9 primeros ususrios
// http://localhost:1337/Usuario?limit=3&skip=9

//5) Trae usuarios ordenados por nombre
//http://localhost:1337/Usuario?sort=nombre DESC

//Traer usuario que contenga las letras 'Jav'
//http://localhost:1337/Usuario?where={"nombre":{"contains":"Javi"}}

//Traer usuario que contenga sueldo menor a 3000
//http://localhost:1337/Usuario?where={"sueldo":{"<":3000}}

//Traer los correos que sean de gmail
//http://localhost:1337/Usuario?where={"correo":{"endsWith":"gmail.com"}}

//Populate
//http://localhost:1337/ProductoUsuario?populate=fkUsuario

//Find usuario id 5
//producto usuario id [12,44,53]
//localizacion producto con id [12,44,53]
