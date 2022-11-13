import { ReceitasModel } from '../model/ReceitasModel';
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

  list(): Observable<ReceitasModel[]>{
    return this.httpClient.get<ReceitasModel[]>(this.API)
    .pipe(
      tap(
        console.log
        )
    );
  }
}

