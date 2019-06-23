import { Component } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda-frontend';

  constructor(private readonly _httpClient:HttpClientModule) {}

  ngOnInit(): void {
    const url = environment.url + 'Usuario';

    const listaUsuario$ = this._httpClient.get(); //observable -->$
    listaUsuario$.subscribe(datos => {
      console.log(datos);
    },
    (error)=>{console.log(error)};
    ));
  }
}
