import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import {MoviesDetailComponent} from './movies-detail/movies-detail.component';
import { MoviesComponent } from './movies.component';
import {MovieImagePipe} from './movie-image.pipe';
//import{InfiniteScrollModule} from 'ngx-infinite-scroll';

const movieCompoente=[
  MoviesDetailComponent,
  MoviesComponent,
  MoviesListComponent,
  MovieImagePipe
]

@NgModule({
  declarations: [...movieCompoente],
  imports: [
    CommonModule,
    RouterModule,
    //InfiniteScrollModule
  ],
  exports:[...movieCompoente]
})
export class MoviesModule { }
