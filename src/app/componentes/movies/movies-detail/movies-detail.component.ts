import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Movies } from '../../Interface/movies.interface';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
 movies$:Observable <Movies>;
actors:Observable< Movies>;

  constructor(private rute:ActivatedRoute, private moviesSvc: ApiService,
              private location:Location) { }



  ngOnInit(): void {
  
   this.rute.params.pipe(take(1)).subscribe((params)=>{
      const id=params ['id'];
      const res= this.moviesSvc.getDetails(id);
      this.movies$=res;
      this.actors=this.moviesSvc.getDetailsActors(id);
    })
  }

onGoBack():void{
  this.location.back();
  //windows.history.back(); otra forma de ir atras
}

}
