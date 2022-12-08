import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { ReceitasModel } from '../../model/ReceitasModel';
import { ReceitaService } from '../../services/receitaService.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() receita!: ReceitasModel;

  constructor(private receitaService: ReceitaService, private router: Router) {}

  ngOnInit(): void {}

  vizualizar() {
    this.router.navigateByUrl('/vizualizar');
  }
}
