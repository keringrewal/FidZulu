import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  @Input() foods: Food[] =[];
  
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFood();
  }
  getFood() {
    this.foodService.getJSON().subscribe((data) => {
      this.foods = data;
    });
  }

}
