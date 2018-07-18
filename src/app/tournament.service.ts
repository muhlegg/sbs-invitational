import { Injectable } from '@angular/core';
import { Game } from './games/games.game';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {ExcelFeed} from './excelFeed';
//
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  constructor(private http: HttpClient) {}

  private feed: object;

  getGames (): any {
    return this.http.get('https://cors.io/?https://spreadsheets.google.com/feeds/list/' +
      '1hFgJ6D-lojKA9sLvyr1Wm9Emx13rnpvtL24Ia43oRzw/od6/public/values?alt=json');
  }
}
