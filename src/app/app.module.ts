import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//import { JQ_TOKEN } from './common/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

import { appRoutes} from './routes';

import { MoviesService } from './services/movies.service';
import { PopularMoviesComponent } from './movies/popular-movies/popular-movies.component';

//declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PopularMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
