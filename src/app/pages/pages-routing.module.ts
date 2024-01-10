import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CharacteresComponent } from './characteres/characteres.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent, //*TEMPLATE
    children: [
     
      {
        path: 'characters',
        component: CharacteresComponent,
        // canActivate: [PagesGuard]
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        // canActivate: [PagesGuard]
      },
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'characters',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
