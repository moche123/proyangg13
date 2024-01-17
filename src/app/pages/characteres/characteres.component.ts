import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/interfaces/character.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.scss']
})
export class CharacteresComponent implements OnInit {

  public characteres$ = new Observable<IResult[]>();

  constructor(
    private _service: PagesService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this.characteres$ = this._service.getCharacteres()
  }

  addFavorite(character:any){
    const body = {
      IdCharacter: character.id,
      IdUser: localStorage.getItem('userId'),
      nameCharacter: character.name,
      caracterUrlImagen: character.image,
      token: localStorage.getItem('token')
    }

    this._service.addFavorite(body).subscribe(ok => {

      if(ok === true ){
        Swal.fire({
          title: 'Enhorabuena!',
          text: `${body.nameCharacter} agregado correctamente`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this._router.navigateByUrl('/pages/favorites');
      }
    })
  }

}
