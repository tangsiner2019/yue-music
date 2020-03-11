import { Component, OnInit } from '@angular/core';
import {Banner, PlayList, PlayListTag, Song} from '../../types/common';
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
  songList: Song[];

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void {
    this.getBanners();
    this.getTopPlayList();
    this.getHotPlayListTag();
    this.getHotSongList();
  }

  getBanners() {
    this.service.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  getHotSongList() {
    this.service.getHotSongs().subscribe(songs => {
      this.songList = songs;
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
