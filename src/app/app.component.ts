import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  photos: Object[] = []
  constructor(http: HttpClient){
    
   
    http.get<Object[]>("http://localhost:3000/flavio/photos").subscribe(
        photos => this.photos = photos


    );
    
  }
}*/
export class AppComponent {
  agregados: Object[] = []
  constructor(http: HttpClient){
    /*agregados => {this.agregados = agregados;
      console.log(agregados);
      }*/
   
    http.get<Object[]>("https://servicodados.ibge.gov.br/api/v3/agregados").subscribe(
      dados => this.agregados = dados,

     
     
      erro => console.log(erro)
    );
    
  }
}
