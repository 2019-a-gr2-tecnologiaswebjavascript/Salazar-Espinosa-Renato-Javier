import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})

export class ItemGaleriaComponent implements OnInit {

  title = 'licoreria';

  @Input()
  titulo;

  @Input()
  textoBoton;

  @Input()
  nombreItem;


  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }




}

/*
@DecoratorsClase()
class Usuario{
  @DecoratorsVariable()
  private nombre = 'Adrian';
  constructor(@DecoratorsConstructor() nombre){

  }

  @DecoratorsMetodo()
 metodoPublico(){

 }
 private metodoPrivado(){

 }
 protected metodoProtected(){

 }
}
*/









