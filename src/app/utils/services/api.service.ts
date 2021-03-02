import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { timeout, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getData(route: string, paranData: any): Observable<any> {
    return this.http.post(route, paranData, { headers: this.headers }).pipe(
      timeout(30000),
      map((res) => res),
      catchError(this.handleError)
    );
  }

  setData(route: string, paranData: any): Observable<any> {
    const body = new HttpParams().set('data', paranData);
    return this.http.post(route, body, { headers: this.headers }).pipe(
      timeout(30000),
      map((res) => res),
      catchError(this.handleError)
    );
  }

  getAllData(route: string): Observable<any> {
    return this.http.get(route).pipe(
      timeout(30000),
      map((res) => res),
      catchError(this.handleError)
    );
  }

  private handleError(res: Response | any) {
    let errorMessage: string;
    errorMessage = res.statusText ? res.statusText : res.toTring();
    return throwError(errorMessage || 'Server Error Contact the Admin');
  }
}
