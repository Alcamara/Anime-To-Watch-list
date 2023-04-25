import { Component } from '@angular/core';
import { ANIMES } from '../form/animes';
import { Anime } from '../form/anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  num = 0;
  animes = ANIMES

  selectedAnime?: Anime
  onSelect(anime: Anime){
    this.selectedAnime = anime
  }

  deleteAnime(anime: Anime){
     for(let indx = 0; indx < ANIMES.length; indx++ ){
          if(anime.entryNum === this.animes[indx].entryNum ) {
            this.animes.splice(indx,1)
          }
     }
  }
}
