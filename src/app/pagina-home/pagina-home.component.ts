import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../services/receitaService.service';
import { ReceitasModel } from '../model/ReceitasModel';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css'],
})
export class PaginaHomeComponent implements OnInit {
  receitas: ReceitasModel[] = [];

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    this.receitaService.getAllReceitas().subscribe((data) => {
      this.receitas = data;
    });
  }
}
