import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';

  arregloDeFlores=[
new Flor("Papitas","A lo bestia"),
new Flor("Carnitas","Gorditas"),
new Flor("chicas","cheveres"),
  ];

  arregloFloresJS=[
    {
      nombre:"Papitas",
    descripcion:"A lo bestia"
  },
  {
    nombre:"Carnitas",
    descripcion:"Gorditas"

    },
    {
      nombre:"Chicas",
    descripcion:"cheveres"
    }

  ]

}

class Flor{
  constructor(
    public nombree:string,
    public descripcionn:string){

    }


}

