import { Component, Input } from "@angular/core";


@Component({
    selector: "ca-agregado",
    templateUrl: "agregado.component.html"
})
export class AgregadoComponent{
  @Input() indiceIbge = {}
}