import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  constructor(private parameters: ActivatedRoute) {
    this.parameters.params.subscribe(
      res => console.log(res)
    )

    this.parameters.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {

  }
}
