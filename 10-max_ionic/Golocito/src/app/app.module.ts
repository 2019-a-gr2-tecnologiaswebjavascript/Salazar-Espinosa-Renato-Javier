import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// importo el nuevo modulo que cree
import { AppPendientesComponent } from './pendientes/app-pendientes/app-pendientes.component';
import { AgregarComponenteComponent } from './agregar-componente/agregar-componente/agregar-componente.component';





@NgModule({
  declarations: [
    AppComponent, 
    AppPendientesComponent,
    AgregarComponenteComponent
  ],
  entryComponents: [ AppPendientesComponent,AgregarComponenteComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [

    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
