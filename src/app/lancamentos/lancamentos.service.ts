import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Lancamento } from './lancamento';

@Injectable({
  providedIn: 'root'
})

export class LancamentosService {

  private urlLancamentos = 'http://localhost:4200/proxy/campos/bandeira/lista';

  constructor(private http: HttpClient) { }

  getLancamentosConta(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(this.urlLancamentos).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

}
