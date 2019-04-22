import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';

@NgModule({
  declarations: [ /*//en lod declaration se guardan los compontes
    //en los import se guardan otros modulos
    //en los providers van los servicios*/
    AppComponent,
    ItemGaleriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


