import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo',
  templateUrl: './fundo.component.html',
  styleUrls: ['./fundo.component.css']
})
export class FundoComponent implements OnInit {
@Input() Ingrediente:string = "loading...";
  constructor() { }

  ngOnInit(): void {
  }

}
