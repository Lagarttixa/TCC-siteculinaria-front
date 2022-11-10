import { FormControl } from '@angular/forms';
import { PaginaHomeComponent } from './pagina-home/pagina-home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AdicionarReceComponent } from './adicionar-rece/adicionar-rece.component';
import { HeaderComponent } from './shared/components/header.component';
import { VisualizarReceComponent } from './visualizar-rece/visualizar-rece.component';
import { from } from 'rxjs';
import { InputComponent } from './shared/components/input/input.component';
import { PontoComponent } from './shared/components/ponto/ponto.component';
import { BotaoComponent } from './shared/components/botao/botao.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    PaginaHomeComponent,
    AdicionarReceComponent,
    VisualizarReceComponent,
    InputComponent,
    PontoComponent,
    BotaoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
