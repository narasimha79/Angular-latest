import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { StarwarsService } from '../starwars.service';
import * as CanvasJS from '../../assets/canvas';


@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
  people;

  
  
  constructor(private startservice:StarwarsService,
    private route:ActivatedRoute,
    private loco:Location) { }

  ngOnInit(): void {
   this.getPeopleById();

   let chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "graphical represenation"
    },
    data: [{
      type: "pie",
      showInLegend: true,
      toolTipContent: "<b>{name}</b>: {y}",
      indexLabel: "{name} - #percent%",
      dataPoints: [
        { y: 450,   },
        { y: 172, name: "height" },
        { y: 300, name: "mass" },
        { y: 10, name: "movies" },
        { y: 1955, name: "DOB" },
       
      ]
    }]
  });
    
  chart.render();
    }
  

  getPeopleById():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.startservice.getPeopleById(id).subscribe(data=>this.people = data);
  }

  goback():void {
this.loco.back();
  }

}
