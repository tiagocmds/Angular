import { AgregadoComponent } from './agregado/agregado.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations:
    [
        AgregadoComponent
    ],
    exports: [AgregadoComponent]
})
export class AgregadosModule{}