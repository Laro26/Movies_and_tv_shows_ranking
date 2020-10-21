import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesListComponent } from './series-list.component';

const routes: Routes = [{ path: '', component: SeriesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesListRoutingModule { }