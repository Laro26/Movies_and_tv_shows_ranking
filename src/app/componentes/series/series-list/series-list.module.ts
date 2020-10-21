import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListRoutingModule } from './series-list-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule, SeriesListRoutingModule,MatTooltipModule]
})
export class SeriesListModule {}