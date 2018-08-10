import { NgModule } from '@angular/core';
import { CervejaComponent } from './cerveja/cerveja.component';
@NgModule ({
   declarations:
   [    
       CervejaComponent
   ],
   exports: [CervejaComponent]
})
export class CervejaModule{}