import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public HeroNames: string[] = ['Spiderman', 'Iroman', 'Superman', 'Hulk'];

  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.HeroNames.pop();
  }
}
