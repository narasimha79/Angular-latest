import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Hero } from '../heroes';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit {
  peoples:Hero[];
  // posts = ' '.repeat(100).split('').map((s, i) => i + 2);
  constructor(private startservice:StarwarsService ) { }

  getHeroes(): void {
    this.startservice.getPeople()
    .subscribe(heroes => this.peoples = heroes);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  onScroll(e) {
    if(this.peoples.length>=100) {
      console.log('No more items');
      return;
    }
    setTimeout(() => {
      console.log('scrolled!!', e);
      const morePeople = this.peoples;
      this.peoples = [...this.peoples, ...morePeople];
    }, 1500)
    
  }

 

}
