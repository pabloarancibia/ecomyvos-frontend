import {Injectable} from '@angular/core';
import {HttpHandler, HttpRequest, HttpInterceptor} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { ErrorDialogService } from "../services/error-dialog.service";

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public errorDialogService: ErrorDialogService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
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
}