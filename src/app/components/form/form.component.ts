import { Component } from '@angular/core';
import { Anime } from './anime';
import { ANIMES } from './animes';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  title = new FormControl('')
  streamingService = new FormControl('')
  entryNum= ANIMES.length +1

  addAnime(): void {
    //debugger

    const anime: Anime ={
      entryNum: ANIMES.length +1,
      title: this.title.value!,
      streamingService: this.streamingService.value!
    }
    ANIMES.push(anime)
    
  }

  
}
