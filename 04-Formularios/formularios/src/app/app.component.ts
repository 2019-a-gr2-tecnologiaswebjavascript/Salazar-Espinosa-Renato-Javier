import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';
  nombre: string;
  apellido: string;
  q: string;

  guardarUsuario(formulario){
    console.log(formulario.controls.nombreUsuario.value);
    console.log(this.nombre);
    // this.nombre = "Benito C."
  }
}
