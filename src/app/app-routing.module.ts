import{NgModule} from '@angular/core'; 
import {Routes, RouterModule} from '@angular/router';
import { MoviesDetailComponent } from './componentes/movies/movies-detail/movies-detail.component';

const routes: Routes=[
    {
        path: 'home',
        loadChildren:() =>
        import('./componentes/home/home.module').then((m)=> m.HomeModule),
    },
    {
        path: 'movies-list',
        loadChildren: () =>
          import(
            './componentes/movies/movies-list/movies-list.module'
          ).then((m) => m.MoviesListModule),
      },
      {
        path: 'movies-detail/:id',
        loadChildren: () =>
          import(
            './componentes/movies/movies-detail/movies-detail.module'
          ).then((m) => m.MoviesDetailModule),
      },
      {
        path: 'series-list',
        loadChildren: () =>
          import(
            './componentes/series/series-list/series-list.module'
          ).then((m) => m.SeriesListModule),
      },
      {
        path: 'series-detail/:id',
        loadChildren: () =>
          import(
            './componentes/series/series-detail/series-detail.module'
          ).then((m) => m.SeriesDetailModule),
      },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}