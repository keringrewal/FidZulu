import { Component, OnInit, Input } from '@angular/core';
import { Bikes } from '../../models/bikes'
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  @Input() bikes: Bikes[] = [];

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getJSON().subscribe((data) => {
      this.bikes = data;
    });
  }

}
