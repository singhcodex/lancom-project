import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {HelpCenter} from "../../helpCenter";

@Injectable({
  providedIn: 'root'
})
export class HelpCenterLinkService {

  private helpCenterEntryUrl = 'api/centers';

  httpOption = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  getLinks(): Observable<HelpCenter[]>{
    return this.http.get<HelpCenter[]>(this.helpCenterEntryUrl)
      .pipe(
        tap(_=> console.log('fetched links')),
        catchError(this.handleError<HelpCenter[]>('getLinks', []))
      )

  }

  searchCenter(term:string): Observable<HelpCenter[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<HelpCenter[]>(`${this.helpCenterEntryUrl}/?title=${term}`).pipe(
      tap(x => x.length ?
      console.log(`found Centers matching "${term}"`) : console.log(`no center match "${term}"`)),
      catchError(this.handleError<HelpCenter[]>('searchCenter', []))
    );
  }

  // save methods

  // add center links

  addCenter(helpCenter: HelpCenter): Observable<HelpCenter>{

    return this.http.post<HelpCenter>(this.helpCenterEntryUrl, helpCenter).pipe(
      tap((newCenter: HelpCenter) => console.log(`added Center with id=${newCenter.id}`)),
      catchError(this.handleError<HelpCenter>('addCenter'))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> =>{
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
