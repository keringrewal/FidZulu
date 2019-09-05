import { Component, OnInit } from '@angular/core';
import { Toys } from '../models/toys';
import { ClassBService } from '../service/class-b.service';

@Component({
  selector: 'app-toylist',
  templateUrl: './toylist.component.html',
  styleUrls: ['./toylist.component.css']
})
export class ToylistComponent implements OnInit {

public listOfToys: Toys[] = [];

  constructor(private toyService: ClassBService) { }

  ngOnInit() {
    this.getToys();
  }
  getToys() {
    this.toyService.getAllToys()
      .subscribe((data) => {this.listOfToys = data;
      console.log(data);})
  }

}
