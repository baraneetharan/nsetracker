import { Component } from '@angular/core';
import { NsedataService } from './nsedata.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'nsetracker';
  restItems = [];
  filteredStocks;
  Math: any;

  constructor(private nsedataService: NsedataService) {
    this.Math = Math;
  }

  ngOnInit() {
    //  this.nsedataService.getData().subscribe(data => this.restItems = data.data);
    // console.log(this.restItems);

    interval(3000)
      .subscribe(
        data => this.filterscrips(),
        error => console.error(error))


  }

  filterscrips() {
    let myStocks = ["BHARTIARTL", "IOC", "INDUSINDBK", "ASIANPAINT", "ULTRACEMCO"];

    this.nsedataService.getData().subscribe(data => this.restItems = data["data"]);
    console.log(this.restItems);



    //     var allStocks =  this.restItems.map(x=>x.symbol);
    // console.log(allStocks);

    var res = this.restItems.filter(function (el) {
      // console.log(el);
      return myStocks.indexOf(el.symbol) >= 0;
    });
    this.filteredStocks = res;
    // console.log(res);
  }
}
