import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { ErrorDialogService } from "../error-dialog.service";
import { AuthService } from "../auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorDialogService: ErrorDialogService,
    private authService: AuthService,
    private jwtHelper: JwtHelperService

    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        this.TokenExpiredVerify();
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error en datos enviados: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `${error.error.message}`;
        }
        //envio error a service errorDialog
        this.errorDialogService.openDialog(errorMessage);
        console.warn('error: ', error);
        console.warn('errorMessage: ', errorMessage);

        //return 
        return throwError(errorMessage);
      })
    );
  }

  TokenExpiredVerify(){
    const token = this.authService.getToken();
    if (token){
      const timeout = this.jwtHelper.getTokenExpirationDate(token).valueOf() - new Date().valueOf();
      if (timeout < 0){
        this.authService.logout();
      }
    }
    
  }
}