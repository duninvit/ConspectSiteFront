import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth/auth.service';
import {AuthHttp, JwtHelper} from 'angular2-jwt';
import {AuthGuard} from './shared/guard/auth.guard';
import {ScopeGuardService} from './shared/services/auth/scope-guard.service';
import {TokenStorage} from './shared/services/auth/token.storage';
import {JwtInterceptor} from './shared/assistance/jwt.interceptor';
import {HttpInterceptor} from './shared/assistance/HttpInterceptor';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  // for development
  // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
    AuthHttp,
    AuthService,
    AuthGuard,
    JwtHelper,
    ScopeGuardService,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
