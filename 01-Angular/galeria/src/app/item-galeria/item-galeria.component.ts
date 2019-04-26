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

  url= "https://www.dasmoto.net/fileadmin/slide/2018/dasmoto_bmw_49.jpg";

  constructor() { }

  ngOnInit() {
  }

  alertar(){
    alert('Auxilio me desmayo: ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur');
  }


notas=[1,2,3,4,5,6,7,8,9,10];

  cambiarImagen(){
  const urlLaguna="https://media-cdn.tripadvisor.com/media/photo-s/0a/af/6f/a8/laguna-de-yahuarcocha.jpg";
  const urlPerro="https://kiwoko.a.ssl.fastly.net/media/wysiwyg/cabecera-ficha-labrador.jpg";
  if(this.url===urlLaguna){
this.url=urlPerro;

  }else{this.url=urlLaguna;}
  //this.url=url1;
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









