import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import {Movies} from '../../Interface/movies.interface';
import {ApiService} from '../../../api.service'
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import {DOCUMENT} from '@angular/common';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movies[] =[];
  actors:Movies[] =[];
  
  page: RequestInfo = {
    next: null,
  };

  showGoUpButton = false;

  private pageNum =1;

  private query: string;

  private hideScrollHeight = 200;

  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT)
    private document:Document, 
    private moviesSvc: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.onUrlChanged();
     }

     //nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];

  ngOnInit() {
    console.log("lo que quieras <3");
  }
  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(){
    debugger
  if(this.page.next){
  this.pageNum++;
  this.getDataService();
   }
console.log (this.pageNum);
  }

onScrollTop(): void{
  this.document.body.scrollTop=0;//safari
  this.document.documentElement.scrollTop=0;//otros navegadores

}
// para cuando se usca una nueva pelicula
  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.movies = [];
        this.pageNum = 1;
        this.getMoviesSearch();

      });
  }

  private getMoviesSearch(): void {
   this.route.queryParams.pipe(
  take(1)).subscribe((params:ParamMap)=>{
    console.log('Params->',params);
    this.query = params ['q'];
    this.getDataService();
})
  }

  private getDataService(): void {
    this.moviesSvc.searchMovies(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe ((res: any)=> {
      console.log('Response Movies ->',res);
      if (res?.results?.length){
        const { page, results } = res;
        this.movies = [...this.movies,...results];
        this.page=page;
      } else{
        this.movies=[];
        console.log('else');
      }  
      });
      console.log('finish');
    }

    private getActors(id):void{
      console.log(id);
     this.moviesSvc.getDetailsActors(id).pipe(
      take(1)
    ).subscribe ((res: any)=> {
      this.actors=res;
    })
    }
}
