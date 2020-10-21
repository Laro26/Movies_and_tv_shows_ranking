import { Pipe, PipeTransform } from '@angular/core';


// Pipe encargado de pasar las imagenes de las Peliculas
@Pipe({
  name: 'movieImg'
})
export class MovieImagePipe implements PipeTransform {

  transform(peli: any): any {

    // path url generica para obtener imagenes
    let url = "http://image.tmdb.org/t/p/w400";

    if (peli.poster_path) {
      return url + peli.poster_path;
    } else {
      if (peli.backdrop_path) {
        return url + peli.backdrop_path;
      } else {
        // Si la pelicula no tiene imagenes disponibles retorna una generica
        return "assets/not-found-image-15383864787lu.jpg";
      }
    }
  }

}