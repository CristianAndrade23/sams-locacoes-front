import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConteudoSiteComponent} from './conteudo-site/conteudo-site.component';
import {HeaderComponent} from './header/header.component';
import { ModalOrcamentoComponent } from './modal-orcamento/modal-orcamento.component';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoSiteComponent,
    HeaderComponent,
    ModalOrcamentoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
