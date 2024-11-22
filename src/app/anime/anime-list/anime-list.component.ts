import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  episodiosTotales: number = 0;
  ratingPromedio: number = 0;
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.episodiosTotales = this.calcularEpisodiosTotales(this.animes);
      this.ratingPromedio = this.calcularRatingPromedio(this.animes);
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();

  }

  calcularEpisodiosTotales(animes: Array<Anime>):number{
    var sum = 0;
    for (var anime of this.animes){
      sum += anime.episode;
    }
    return sum;
  }

  calcularRatingPromedio(animes: Array<Anime>):number{
    var sum = 0;
    for (var anime of this.animes){
      sum += anime.Rating;
    }
    return sum/this.animes.length;
  }

}
