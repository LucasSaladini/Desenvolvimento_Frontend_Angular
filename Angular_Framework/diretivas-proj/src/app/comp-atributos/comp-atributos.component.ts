import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{
  style:string = "disable"
  corFundo: string = "yellow"
  corDaFonte: string = "blue"

  constructor() {}

  ngOnInit(): void {

  }

  change() {
    if(this.style === 'disable') {
      this.style = 'enable'
    } else {
      this.style = 'disable'
    }
  }
}
