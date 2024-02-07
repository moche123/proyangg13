import { Router } from '@angular/router';
import { PagesService } from '../services/pages.service';
import { FavoritesComponent } from './favorites.component';
import { of } from 'rxjs';
import { fakeAsync, flush } from '@angular/core/testing';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;

  const mockPagesService = {
    getFavorites: jasmine.createSpy('getFavorites').and.returnValue(of([])),
    deleteFavorite: jasmine.createSpy('deleteFavorite').and.returnValue(of({})),
  };

  const mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };

  beforeEach(() => {
    component = new FavoritesComponent(
      <PagesService>(<unknown>mockPagesService),
      <Router>(<unknown>mockRouter)
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test OnInit', fakeAsync(() => {
    //! Act
    component.ngOnInit();
    flush();
    component.favorites$.subscribe((res) => {
      expect(res).toBeDefined();
    });
  }));

  it('should test deleteFavorite', fakeAsync(() => {
    //! Act
    component.deleteFavorite({
      IdCharacter: 1,
      IdUser: 2,
    });

    // const swalSpy = spyOn(component.swal, 'fire');

    flush();

    //!SWAL DISPARE
    // expect(swalSpy).toHaveBeenCalled();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/pages/characteres');
  }));
});
