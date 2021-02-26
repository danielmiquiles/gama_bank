import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageErrorModule } from './page-error/page-error.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
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
