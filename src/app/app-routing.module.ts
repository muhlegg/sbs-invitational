import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'groups', component: GamesComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
