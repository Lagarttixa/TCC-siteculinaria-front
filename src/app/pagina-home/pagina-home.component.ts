import { Observable } from 'rxjs';
import { HomeService } from './server/homeService.service';
import { HomeModel } from './model/homeModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
export class PaginaHomeComponent implements OnInit {

  receitas: HomeModel[] = [];

  teste: any;



  constructor(private homeService: HomeService) {

   }



  ngOnInit(): void {
    this.homeService.list().subscribe(receitas => this.receitas = receitas);
    console.log("receitas aqui" + this.receitas)


  }

}
