import { HttpClient } from '@angular/common/http';
import { PagesService } from './pages.service';
import { of } from 'rxjs';

describe('PagesService', () => {
  let service: PagesService;

  const mockHttpClient = {
    get: jasmine.createSpy('get').and.returnValue(
      of({
        info: {
          count: 0,
          pages: 0,
          next: '',
          prev: '',
        },
        results: [
          {
            id: 0,
            name: 'Personaje1',
            status: '',
            species: '',
            type: '',
            gender: '',
            origin: {
              name: '',
              url: '',
            },
            location: {
              name: '',
              url: '',
            },
            image: '',
            img: '',
            episode: [],
            url: '',
            created: '',
          },
        ],
        favorites: [],
      })
    ),
    post: jasmine.createSpy('post'),
    delete: jasmine.createSpy('delete').and.returnValue(of({})),
  };

  beforeEach(() => {
    service = new PagesService(<HttpClient>(<unknown>mockHttpClient));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getCharacteres correctly', () => {
    //! ARRANGE

    //! ACT
    service.getCharacteres().subscribe((res) => {
      //! ASSERT
      expect(res[0].name).toBe('Personaje1');
    });
  });

  it('should test addFavorite correctly', () => {
    //! ARRANGE
    mockHttpClient.post.and.returnValue(
      of({
        ok: true,
      })
    );
    //! ACT
    service.addFavorite({}).subscribe((res) => {
      //! ASSERT
      expect(res).toBe(true);
    });
  });

  it('should test addFavorite WRONG', () => {
    //! ARRANGE
    mockHttpClient.post.and.returnValue(of(null));

    const swalSpy = spyOn(service.swal, 'fire');

    //! ACT
    service.addFavorite({}).subscribe((res) => {
      //! ASSERT
      expect(swalSpy).toHaveBeenCalled();
    });
  });

  it('should test getFavorites', () => {
    //! ARRANGE

    //! ACT
    service.getFavorites().subscribe((res) => {
      //! ASSERT
      expect(res).toBeDefined();
    });
  });

  /*
  deleteFavorite(IdCharacter: any, IdUser: any): Observable<any> {
    const url = `${this.baseUrl}/api/favorite/deleteFavorite`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { IdCharacter, IdUser },
    };
    // const headers = new HttpHeaders().set(IdCharacter.toString(),IdUser)

    return this._http.delete<any>(url, options);
  }
  */

  it('should test deleteFavorite', () => {
    //! ARRANGE

    //! ACT
    service.deleteFavorite(1, 1).subscribe((res) => {
      //! ASSERT
      expect(res).toBeDefined();
    });
  });
});
