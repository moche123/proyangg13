import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IResult, IRickMortiApi } from 'src/app/interfaces/character.interface';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable()
export class PagesService {
  private baseUrl: string = environment.baseUrl;
  private apiUrl: string = environment.apiUrl;
  public swal = Swal;

  constructor(private _http: HttpClient) {}

  getCharacteres(): Observable<IResult[]> {
    return this._http
      .get<IRickMortiApi>(this.apiUrl)
      .pipe(map((res) => res.results));
  }

  addFavorite(body: any): Observable<any> {
    const url = `${this.baseUrl}/api/favorite/newFavorite`;

    return this._http.post<any>(url, body).pipe(
      map((resp) => {
        if (resp === null || resp === undefined) {
          throw new Error('NOT RESPONSE NULL');
        }
        return resp.ok;
      }),
      catchError((err) => {
        this.swal.fire({
          title: 'Error!',
          text: err?.error?.msg ?? 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        return of(err.error);
      })
    );
  }

  getFavorites(): Observable<any[]> {
    const url = `${this.baseUrl}/api/favorite/${localStorage.getItem(
      'userId'
    )}`;

    return this._http.get(url).pipe(
      map((todo: any) => {
        return todo.favorites;
      })
    );
  }

  deleteFavorite(IdCharacter: any, IdUser: any): Observable<any> {
    const url = `${this.baseUrl}/api/favorite/deleteFavorite`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { IdCharacter, IdUser },
    };
    // const headers = new HttpHeaders().set(IdCharacter.toString(),IdUser)

    return this._http.delete<any>(url, options);
  }
}
