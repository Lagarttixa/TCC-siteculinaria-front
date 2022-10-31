import { HomeModel } from './../model/homeModel';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API ='api/receitas';

  id:string = "1";

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<HomeModel[]>(this.API + '/1')
    .pipe(
      tap(receitas=>console.log(receitas))
    );
  }
}

