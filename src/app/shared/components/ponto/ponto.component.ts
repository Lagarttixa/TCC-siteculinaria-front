import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css']
})
export class PontoComponent implements OnInit {
@Input() numer:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
