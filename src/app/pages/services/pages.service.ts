import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResult, IRickMortiApi } from 'src/app/interfaces/character.interface';

@Injectable()
export class PagesService {

  constructor( private http: HttpClient ) { }

  getCharacteres():Observable<IResult[]>{
    return this.http.get<IRickMortiApi>('https://rickandmortyapi.com/api/character/')
            .pipe(
              map( res => res.results )
            )
  }
}
