import { Pipe, PipeTransform } from '@angular/core';


// Pipe encargado de pasar las imagenes de las Peliculas
@Pipe({
  name: 'serieImg'
})
export class SeriesImagePipe implements PipeTransform {

  transform(show: any): any {

    // path url generica para obtener imagenes
    let url = "http://image.tmdb.org/t/p/w400";

    if (show.poster_path) {
      return url + show.poster_path;
    } else {
      if (show.backdrop_path) {
        return url + show.backdrop_path;
      } else {
        // Si la pelicula no tiene imagenes disponibles retorna una generica
        return "assets/not-found-image-15383864787lu.jpg";
      }
    }
  }

}