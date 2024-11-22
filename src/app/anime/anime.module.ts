import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { RouterModule } from '@angular/router';
import { AnimeRoutingModule } from './anime-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AnimeRoutingModule
  ],
  exports: [AnimeListComponent],
  declarations: [AnimeListComponent, AnimeDetailComponent]
})
export class AnimeModule { }
