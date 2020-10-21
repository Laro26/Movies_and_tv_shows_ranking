import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetailComponent } from './movies-detail.component';

const routes: Routes = [{ path: '', component: MoviesDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesDetailRoutingModule { }