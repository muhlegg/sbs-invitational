import {Component, OnInit} from '@angular/core';
import {TournamentService} from '../tournament.service';
import {Game} from './games.game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  private games: Game[] = [];

  constructor(private tournamentService: TournamentService) {}

  getGames(): Game[] {
    return this.games;
  }

  loadGames(): void {
    this.tournamentService.getGames()
      .subscribe((res: any[]) => {
        for (const game of res['feed']['entry']) {
          this.games.push(
            new Game(
              game['gsx$id']['$t'],
              game['gsx$time']['$t'],
              game['gsx$home']['$t'],
              game['gsx$away']['$t'],
              game['gsx$hscore']['$t'],
              game['gsx$ascore']['$t'],
              game['gsx$status']['$t']
            )
          );
        }

      });
  }

  ngOnInit() {
    this.loadGames();
  }

}
