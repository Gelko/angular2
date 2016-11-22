import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import { FormsModule }   from '@angular/forms';
//This array contains the list of all components, pipes, and directives that we created and that belong in our application's module.
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
