import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API =environment.baseUrl + '/receitas';

  constructor() { }

  // receita(id: string){
  //   return this.httpClient.get(`${this.API}/${id}, id`).pipe(tap(console.log))
  // }
}
