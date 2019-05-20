import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from 'src/app/servicios/lista-deseos.service';
import { NavController } from '@ionic/angular';
import { AgregarComponenteComponent } from 'src/app/agregar-componente/agregar-componente/agregar-componente.component';

@Component({
  selector: 'app-app-pendientes',
  templateUrl: './app-pendientes.component.html',
  styleUrls: ['./app-pendientes.component.scss'],
})
export class AppPendientesComponent implements OnInit {

  constructor(private _listaDeseos: ListaDeseosService,
              private navControlador: NavController) { }

  ngOnInit() {}

  irAgregar(){
    
  }

}
