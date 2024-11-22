import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';


const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: 'animes', loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
