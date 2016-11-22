import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
  <h1>{{title}}<h1>
  <h2>My heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero" 
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  providers: [HeroService]
})

export class AppComponent implements OnInit { 
  ngOnInit() : void {
     this.getHeroes();
  }
  constructor(private heroService: HeroService) {
  }

  title = "Tour of Heroes";
  heroes : Hero[];
  selectedHero : Hero;

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroes = this.heroService.getHeroes();
  }
}