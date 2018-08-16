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
/*
export class AppComponent {
  agregados: Object[] = []
  constructor(http: HttpClient){
  
    http.get<Object[]>("https://servicodados.ibge.gov.br/api/v3/agregados").subscribe(
      dados => {this.agregados = dados;
        console.log(dados)
      },
      erro => console.log(erro),
      
      );

  }
  
}*/
/*
export class AppComponent{
  estados: Object[] = []
  constructor(http: HttpClient){
    http.get<Object[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").subscribe(
      dados => {this.estados = dados;
        console.log(dados)
      },
       
      
      erro => console.log(erro)
    );
    
  }
}*/
export class AppComponent{
  municipios: Object[] = []
  constructor(http: HttpClient){
    http.get<Object[]>("http://servicodados.ibge.gov.br/api/v1/localidades/regioes/3%7C4/municipios").subscribe(
      dados => {this.municipios = dados;
      console.log(dados)
      }
    )
  }
}
