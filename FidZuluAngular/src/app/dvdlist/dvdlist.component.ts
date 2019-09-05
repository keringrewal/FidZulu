import { Component, OnInit } from '@angular/core';
import { ClassBService } from '../service/class-b.service';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'app-dvdlist',
  templateUrl: './dvdlist.component.html',
  styleUrls: ['./dvdlist.component.css']
})
export class DvdlistComponent implements OnInit {

  public listOfDVDs: Dvd[] = [];

  constructor(private DvdService: ClassBService) { }

  ngOnInit() {
    this.getDVDs();
  }
  getDVDs() {
      this.DvdService.getAllDVD('ID')
      .subscribe((data) => {this.listOfDVDs = data;
      console.log(data);})
  }
  getRaleigh() {
    this.DvdService.getAllDVD('US-NC')
    .subscribe((data) => {this.listOfDVDs = data;
    console.log(data);})
}

getIE() {
  this.DvdService.getAllDVD('IE')
  .subscribe((data) => {this.listOfDVDs = data;
  console.log(data);})
}

}
