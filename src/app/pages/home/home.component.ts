import { Component, OnInit } from '@angular/core';
import {Banner, PlayList, PlayListTag} from '../../types/common';
import {HomeService} from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  playLists: PlayList[];
  tags: PlayListTag[];

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.getBanners();
    this.getTopPlayList();
    this.getHotPlayListTag();
  }

  getBanners() {
    this.service.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  getTopPlayList() {
    this.service.getTopPlayList().subscribe(playLists => {
      this.playLists = playLists;
    });
  }

  getHotPlayListTag() {
    this.service.getHotTags().subscribe(tags => {
      this.tags = tags;
    });
  }

}
