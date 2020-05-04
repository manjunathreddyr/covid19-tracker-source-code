import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covidTracker';

  BannerDataList: any;
  BannerData: string = "Be a true Indian. Show compassion. Be considerate. Help those in need. We will get through this!";
  storebannerSubject: BehaviorSubject<any> = new BehaviorSubject('');

  count: number;
  subscription: Subscription;
  intervalId: number;

  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getBannerData().subscribe(
      data => {
        this.BannerDataList = data.factoids.map(item => {
          return item.banner;
        })

        this.count = this.BannerDataList.length - 1;
        this.BannerData = this.BannerDataList[0];

        const source = interval(5000);
        let i: number = 0;

        this.subscription = source.subscribe((val: any) => {
          val = this.opensnack(this.BannerDataList[i]);
          this.storebannerSubject.next(val);
          i = i + 1;
          if (i <= this.count) {
            i = i + 1
          } else {
            i = 0;
          }
        })
      })



  }

  opensnack(data) {
    this.storebannerSubject.subscribe(v => {
      this.BannerData = data;
    })
  }

}
