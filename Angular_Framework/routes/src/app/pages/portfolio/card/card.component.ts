import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  constructor(
    private parameters: ActivatedRoute,
    private navigator: Router
    ) {
    this.parameters.params.subscribe(
      res => console.log(res)
    )

    this.parameters.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navigator.navigate(['/'])
    // }, 5000)
  }
}
