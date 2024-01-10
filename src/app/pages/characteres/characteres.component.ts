import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.scss']
})
export class CharacteresComponent implements OnInit {

  public characteres$ = new Observable<IResult[]>();

  constructor(
    private _service: PagesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.characteres$ = this._service.getCharacteres()
  }

  addFavorite(character:any){
    console.log(character);
    this.router.navigateByUrl('/pages/favorites')
  }

}
