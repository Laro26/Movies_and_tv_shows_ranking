import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListRoutingModule } from './movies-list-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';
//import{InfiniteScrollModule} from 'ngx-infinite-scroll';
@NgModule({
  declarations: [],
  imports: [CommonModule, MoviesListRoutingModule,MatTooltipModule]
})
export class MoviesListModule {}