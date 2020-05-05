import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged,switchMap} from 'rxjs/operators'
import { StarwarsService } from '../starwars.service';
import { Hero } from '../heroes';


@Component({
  selector: 'app-herosearch',
  templateUrl: './herosearch.component.html',
  styleUrls: ['./herosearch.component.css']
})
export class HerosearchComponent implements OnInit {
  peoples:Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  search(term:string)  {
    this.searchTerm.next(term);
  }

  constructor(private starservice:StarwarsService) { }

  ngOnInit(): void {
    this.peoples  = this.searchTerm.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.starservice.searchHeroes(term)),
    );
  }

}
