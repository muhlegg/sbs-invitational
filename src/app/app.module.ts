import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GroupsComponent } from './groups/groups.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFittextModule} from 'angular-fittext';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
