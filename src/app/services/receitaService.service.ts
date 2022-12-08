import { ReceitasModel } from '../model/ReceitasModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IngredienteModel } from '../model/IngredientesModel';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private readonly APIReceitas = 'api/receitas';
  private readonly APIIngredientes = 'api/ingredientes'

  constructor(private httpClient: HttpClient) {}

  getAllReceitas(): Observable<ReceitasModel[]> {
    return this.httpClient
      .get<ReceitasModel[]>(this.APIReceitas)
      .pipe(tap(console.log));
  }

  getReceitaById(id: string): Observable<ReceitasModel> {
    return this.httpClient
      .get<ReceitasModel>(this.APIReceitas + `/${id}`)
      .pipe(tap(console.log));
  }

  getAllIngredientes(): Observable<IngredienteModel[]>{
    return this.httpClient
    .get<IngredienteModel[]>(this.APIIngredientes)
    .pipe(tap(console.log));
  }
}
