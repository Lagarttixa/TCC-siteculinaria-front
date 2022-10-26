import { HomeService } from './server/homeService.service';
import { HomeModel } from './model/homeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
export class PaginaHomeComponent implements OnInit {
receita: HomeModel[] = [];



  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
   
  }

}
