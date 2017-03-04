import { Routes } from '@angular/router'
import { HomeComponent} from './home/home.component'
import { PopularMoviesComponent} from './movies/popular-movies/popular-movies.component'

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movies/popular', component: PopularMoviesComponent},
    { path: '', redirectTo:'/home', pathMatch: 'full' }
]