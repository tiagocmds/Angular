import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindComponent } from './data-bind/data-bind.component';
import { PhotosModule } from './photos/photos.module';
import { CervejaModule } from './bebidas/bebidas.module';
import { AgregadosModule } from './agregados/agregados.module';
import { EstadoModule } from './estados/estados.module';
import { MunicipiosModule } from './municipios/municipios.module';



@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindComponent,
    
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    CervejaModule,
    HttpClientModule,
    AgregadosModule,
    EstadoModule,
    MunicipiosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
