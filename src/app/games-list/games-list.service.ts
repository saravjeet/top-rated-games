import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GamesListService {
  constructor(private _http: HttpClient) {}

  public getGamesList() {
    return this._http.get("http://demo4238069.mockable.io/");
  }
}
