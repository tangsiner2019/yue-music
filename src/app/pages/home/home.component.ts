import { Component, OnInit } from '@angular/core';
import {Banner} from '../../types/common';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners() {
    this.service.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

}
