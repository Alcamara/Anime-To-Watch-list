import { Component, Input } from '@angular/core';
import { Anime } from '../form/anime';

@Component({
  selector: 'app-anime-list-detail',
  templateUrl: './anime-list-detail.component.html',
  styleUrls: ['./anime-list-detail.component.css']
})
export class AnimeListDetailComponent {
  @Input() anime?: Anime
}
