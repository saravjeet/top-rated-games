import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { GamesListService } from "./games-list/games-list.service";
import { GamesListComponent } from "./games-list/games-lsit.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, GamesListComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [GamesListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
