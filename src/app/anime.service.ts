import { Injectable } from '@angular/core';
import { Anime } from './components/form/anime';  
import { ANIMES } from './components/form/animes';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor() { }

  getAnimes(): Anime[]{
    return ANIMES
  }
}
