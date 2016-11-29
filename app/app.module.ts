import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import { FormsModule }   from '@angular/forms';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import { HeroService } from './hero.service';
import {RouterModule} from '@angular/router';

//This array contains the list of all components, pipes, and directives that we created and that belong in our application's module.
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
