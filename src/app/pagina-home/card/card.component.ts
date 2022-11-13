import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

import { ReceitasModel } from '../model/ReceitasModel';
import { HomeService } from '../server/homeService.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  receitas: ReceitasModel[] = [];

  constructor(private homeService: HomeService, private router:Router) { }

  ngOnInit():void {
    this.homeService.list().subscribe((receitas)=>{
      this.receitas=receitas
    });

  }

  vizualizar(){
    this.router.navigateByUrl('/vizualizar');
  }

}
