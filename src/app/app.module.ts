import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from "./guards/auth.guard";
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpErrorInterceptor } from './services/interceptors/http-error-interceptor.service';
import { ErrorDialogComponent } from './errors/component/errordialog/errordialog.component';
import { ErrorDialogService } from './services/error-dialog.service';
import { EqualValidatorDirective } from './directives/equal-validator.directive';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorDialogComponent,
    EqualValidatorDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    InicioModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("access_token");
        },
        allowedDomains: ["localhost:4200"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    })

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorInterceptor, 
      multi: true 
    },
    ErrorDialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent],
})
export class AppModule { }
