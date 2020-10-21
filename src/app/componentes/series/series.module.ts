import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesComponent } from './series.component';
import {SeriesImagePipe} from './series-image.pipe';
import { SeriesDetailComponent } from './series-detail/series-detail.component';


const serieCompoente=[
  SeriesDetailComponent,
  SeriesComponent,
  SeriesListComponent,
  SeriesImagePipe
]

@NgModule({
  declarations: [...serieCompoente],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[...serieCompoente]
})
export class SeriesModule { }
