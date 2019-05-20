import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';

@NgModule({
  declarations: [ /*//en las declaration se guardan los componentes
    //en los import se guardan otros modulos*/

    AppComponent,
    ItemGaleriaComponent
  ],
  imports: [    BrowserModule ], /*van otros modulos*/
  providers: [/*en los providers/ van los servicios*/
    CarritoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


