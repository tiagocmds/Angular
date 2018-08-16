import { Component, Input } from "@angular/core";

@Component({
    selector: "ca-estado",
    templateUrl: "estado.component.html"
})
export class EstadoComponent{
    @Input() listaestados = {}
}