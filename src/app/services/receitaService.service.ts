import { ReceitasModel } from '../pagina-home/model/ReceitasModel';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private readonly API = 'api/receitas';

  constructor(private httpClient: HttpClient) {}

  getAllReceitas(): Observable<ReceitasModel[]> {
    return this.httpClient
      .get<ReceitasModel[]>(this.API)
      .pipe(tap(console.log));
  }

  getReceitaById(id: string): Observable<ReceitasModel> {
    return this.httpClient
      .get<ReceitasModel>(this.API + `/${id}`)
      .pipe(tap(console.log));
  }
}
