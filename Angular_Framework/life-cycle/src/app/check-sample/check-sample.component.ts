import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements
OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
	quantity:number = 0

	constructor() { }

	add() {
		this.quantity += 1
	}

	subtract() {
		this.quantity -= 1
	}

	ngOnInit(): void {
		console.log("OnInit")
	}

	//checked -> content -> view


	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

	// quando o primeiro conteúdo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	// depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	// após alguma alteração, verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}

	// após alguma alteração, verifica a view
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	ngOnDestroy(): void {
		console.log("Goodbye my friend :(")
	}

}
