import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/component/header/header.component';
import {SearchComponent} from './componentes/component/search/search.component';
import { MenuComponent } from './componentes/component/menu/menu.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './componentes/home/home.module';
import{InfiniteScrollModule} from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
    MatIconModule,
    NoopAnimationsModule,
    HomeModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
