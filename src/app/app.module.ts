import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { SolicitarNovaSenhaComponent } from './solicitar-nova-senha/solicitar-nova-senha.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent, 
    EsqueciSenhaComponent, 
    SolicitarNovaSenhaComponent,
    NotFoundComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
