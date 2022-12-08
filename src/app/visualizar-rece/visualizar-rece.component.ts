import { IngredienteModel } from './../model/IngredientesModel';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasModel } from '../model/ReceitasModel';
import { ReceitaService } from '../services/receitaService.service';

@Component({
  selector: 'app-visualizar-rece',
  templateUrl: './visualizar-rece.component.html',
  styleUrls: ['./visualizar-rece.component.css'],
})
export class VisualizarReceComponent implements OnInit,AfterViewInit {
  receita!: ReceitasModel;
  ingredientes!: IngredienteModel;
  etapasPreparo: string[] = [];

  constructor(
    private receitaService: ReceitaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') as string;

    this.receitaService.getReceitaById(id).subscribe((receita) => {
      this.receita = receita;
      this.etapasPreparo = this.receita.modoPreparo.split("} {");
      this.etapasPreparo[0].replace("{","");
      this.etapasPreparo[this.etapasPreparo.length-1].replace("}","");
    });
  }
  ngAfterViewInit(): void {
    this.etapasPreparo.forEach(etapa=>{
      etapa.replace(/\{|\}/gm,"")
    })
  }
}
