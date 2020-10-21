import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MoviesModule} from '../movies/movies.module';
import {SeriesModule} from '../series/series.module'


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule,MoviesModule,SeriesModule],
})
export class HomeModule {}
