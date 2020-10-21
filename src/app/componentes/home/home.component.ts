import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Movies } from '../Interface/movies.interface';
import { Series } from '../Interface/series';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(){}
 /* movies: Movies[] =[];
  series: Series[] =[];
  
   showGoUpButton = false;
 
   private pageNum = 2;
 
   private query: string;
 
   private hideScrollHeight = 200;
 
   private showScrollHeight = 500;
 
   constructor(
     private msSvc: ApiService,
     private route: ActivatedRoute,
     private router: Router,
     ) {
       this.onUrlChanged();
      }
 
 
   ngOnInit() {
     console.log("<3");
     this.getMoviesSearch();
   }
 
   private onUrlChanged(): void {
     this.router.events
       .pipe(filter((event) => event instanceof NavigationEnd))
       .subscribe(() => {
         this.movies = [];
         this.series = [];
         this.pageNum = 2;
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
     //movies
     this.msSvc.searchMovies(this.query, this.pageNum)
     .pipe(
       take(1)
     ).subscribe ((res: any)=> {
       console.log('Response ->',res);
       if (res?.results?.length){
         const { results, actors } = res;
         this.movies = [...this.movies,...results];
  
       } else{
         this.movies=[];
       }  
       });
       //series
       this.msSvc.searchSeries(this.query, this.pageNum)
       .pipe(
         take(1)
       ).subscribe ((res: any)=> {
         console.log('Response ->',res);
         if (res?.results?.length){
           const { results, actors } = res;
           this.series = [...this.series,...results];
    
         } else{
           this.series=[];
         }  
         });
  
   }*/
  

}
