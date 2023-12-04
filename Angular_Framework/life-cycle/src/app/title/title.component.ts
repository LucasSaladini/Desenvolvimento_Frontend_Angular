import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
	@Input() name:string = ""

	constructor() {
		console.log(`Constructor ${this.name}`)
	}

	ngOnInit(): void {
		console.log(`OnInit ${this.name}`)
	}

	ngOnChanges(): void {
		this.name = this.name + 'x'
		console.log(`OnChanges ${this.name}`)
	}
}
