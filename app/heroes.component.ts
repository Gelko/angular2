import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: 
  `
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero" 
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
})

export class HeroesComponent implements OnInit { 
  ngOnInit() : void {
     this.getHeroes();
  }
  constructor(private heroService: HeroService) {
  }

  heroes : Hero[];
  selectedHero : Hero;

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}