import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: "ca-municipio",
    templateUrl: "municipio.component.html"
})
export class MunicipioComponent implements OnInit{
    ngOnInit(): void {
       // console.log(this.municipio.nome);
    }
    @Input() municipio= "";

}
