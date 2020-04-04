import { Component } from "@angular/core";
import { GamesListService } from "./games-list.service";

@Component({
  selector: "games-list",
  templateUrl: "./games-list.component.html"
})
export class GamesListComponent {
  public list: any[];
  constructor(private _gamesListService: GamesListService) {
    this._gamesListService.getGamesList().subscribe(data => {
      this.list = data;
    });
    console.log(this.list);
  }
}
