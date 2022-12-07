import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitasModel } from '../pagina-home/model/ReceitasModel';
import { ReceitaService } from '../services/receitaService.service';

@Component({
  selector: 'app-visualizar-rece',
  templateUrl: './visualizar-rece.component.html',
  styleUrls: ['./visualizar-rece.component.css']
})
export class VisualizarReceComponent implements OnInit {

  receita!: ReceitasModel;



  constructor(private receitaService: ReceitaService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") as string;

    this.receitaService.getReceitaById(id).subscribe((receita)=>{
      this.receita=receita;
    });

  }

}
