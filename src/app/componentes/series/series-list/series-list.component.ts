import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import {Series} from '../../Interface/series'
import {ApiService} from '../../../api.service'
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

/*type RequestInfo = {
  next: string;
};*/

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Series[] =[];
  actors:Series[] =[];
  
 /* actors: RequestInfo = {
    next: null,
  };*/

  showGoUpButton = false;

  private pageNum = 1;

  private query: string;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    private seriesSvc: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.onUrl2Changed();
     }


  ngOnInit() {
    console.log("sirve <3");
   // this.getSeriesSearch();
  }

  private onUrl2Changed(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.series = [];
        this.pageNum = 1;
        this.getSeriesSearch();
      });
  }
  private getSeriesSearch(): void {
   this.route.queryParams.pipe(
  take(1)).subscribe((params:ParamMap)=>{
    console.log('Params series->',params);
    this.query = params ['q'];
    this.getDataSeriesService();
})
  }


  private getDataSeriesService(): void {
    this.seriesSvc.searchSeries(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe ((res: any)=> {
      console.log('Response series ->',res);
      if (res?.results){
        const { results, actors } = res;
        this.series = [...this.series,...results];
 
      } else{
        this.series=[];
      }  
      });
  }
  private getActors(id):void{
    console.log(id);
   this.seriesSvc.getDetailsActors(id).pipe(
    take(1)
  ).subscribe ((res: any)=> {
    this.actors=res;
  })

  }

}
