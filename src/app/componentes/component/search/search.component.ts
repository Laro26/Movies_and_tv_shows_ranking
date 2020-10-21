import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  /*no estar buscando a las peliculas todo el tiempo  */
  onSearch (value: string){
    //console.log('buscar',value)
    if (value && value.length > 3){
      this.router.navigate(['/home'],{
        queryParams:{q:value}
      })
    }
  }

}
