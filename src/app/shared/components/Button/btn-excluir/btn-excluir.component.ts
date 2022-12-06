import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-excluir',
  templateUrl: './btn-excluir.component.html',
  styleUrls: ['./btn-excluir.component.css']
})
export class BtnExcluirComponent implements OnInit {
@Input() tipoMargi:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
