import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Thornillo'];
  public deletedHeroNames?: string = '';

  removeLastHero(): void {
    this.deletedHeroNames = this.heroNames.pop();
    // console.log(deletedHero);
  }

}
