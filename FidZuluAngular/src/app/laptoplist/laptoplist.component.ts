import { Component, OnInit } from '@angular/core';
import { ClassBService } from '../service/class-b.service';
import { Laptops } from '../models/laptops';

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css']
})
export class LaptoplistComponent implements OnInit {

  public listOfLaptops: Laptops[] = [];

  constructor(private laptopService: ClassBService) { }

  ngOnInit() {
    this.getLaptops();
  }
  getLaptops() {
      this.laptopService.getAllLaptops('')
      .subscribe((data) => {this.listOfLaptops = data;
      console.log(data);})
  }

}
