import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public bChangeName: boolean = true;
  public bChangeAge: boolean = true;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name} - ${ this.age }`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
    this.bChangeName = false;
  }

  changeAge(): void{
    this.age = 33;
    this.bChangeAge = false;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    });
  }

}
