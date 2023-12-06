import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  produtos: string[] = []
  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  adicionar() {
    this.produtos.push("Lucas")
  }

  remover() {
    this.produtos.pop()
  }

  ngOnInit(): void {

  }
}
