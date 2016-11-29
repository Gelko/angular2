import {Component} from '@angular/core';
import { HeroService} from './hero.service';

@Component ({
    selector : "my-app",
    template : 
    `
    <h1>{{title}}<h1>
    <nav>
        <a routerLink="/heroes">Heroes</a>
        <a routerLink="/dashoard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    providers : [HeroService]
})

export class AppComponent {
    title = "Tour of Heroes";
}