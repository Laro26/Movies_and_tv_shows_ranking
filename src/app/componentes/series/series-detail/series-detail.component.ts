import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Series } from '../../Interface/series';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  series$:Observable <Series>;


  constructor(private rute:ActivatedRoute, private seriesSvc: ApiService,
              private location:Location) { }



  ngOnInit(): void {
  
   this.rute.params.pipe(take(1)).subscribe((params)=>{
      const id=params ['id'];
      this.series$= this.seriesSvc.getDetailsSeries(id);
    })
  }

onGoBack():void{
  this.location.back();
  //windows.history.back(); otra forma de ir atras
}

}

