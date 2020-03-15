import {Component, OnInit} from '@angular/core';
import {Artist, Banner, PlayList, PlayListTag, Song} from '../../types/common';
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
  artistList: Artist[];
  newSongList: Song[];

  constructor(
    private service: HomeService
  ) {
  }

  ngOnInit(): void {
    this.getBanners();
    this.getTopPlayList();
    this.getHotPlayListTag();
    this.getHotSongList();
    this.getHotArtistList();
    this.getNewSongList();
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

  getNewSongList() {
    this.service.getNewSongs().subscribe(songs => {
      this.newSongList = songs;
    });
  }

  getHotArtistList() {
    this.service.getTopArtists().subscribe(artists => {
      this.artistList = artists;
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
