import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Artist, Banner, PlayList, PlayListTag, Song} from '../types/common';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API_ROOT} from '../config/config';
import {map} from 'rxjs/operators';
import {ServicesModule} from './services.module';
import * as queryString from 'querystring';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  constructor(
    private http: HttpClient
  ) { }

  // 获取轮播图
  getBanners(): Observable<Banner[]> {
    return this.http.get(API_ROOT + '/banner')
      .pipe(
        map((res: { banners: Banner[] }) => res.banners)
      );
  }

  // 获取热门歌单
  getTopPlayList(args = { limit: 20, order: 'hot', cat: '全部'}): Observable<PlayList[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args)});
    return this.http.get(API_ROOT + '/top/playlist', {params})
      .pipe(
        map((res: { playlists: PlayList[] }) => res.playlists)
      );
  }

  // 获取热门歌手
  getTopArtists(args = { limit: 10, offset: 0 }): Observable<Artist[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args)});
    return this.http.get(API_ROOT + '/top/artists', {params})
      .pipe(
        map((res: { artists: Artist[] }) => res.artists)
      );
  }

  // 获取热门标签
  getHotTags(): Observable<PlayListTag[]> {
    return this.http.get(API_ROOT + '/playlist/hot')
      .pipe(
        map((res: {tags: PlayListTag[] }) => {
          return res.tags.sort((x: PlayListTag, y: PlayListTag) => {
            return x.position - y.position;
          }).slice(0, 6);
        })
      );
  }

  // 获取热门歌曲
  getHotSongs(): Observable<Song[]> {
    const params = new HttpParams({ fromString: 'idx=1' });
    return this.http.get(API_ROOT + '/top/list', {params})
      .pipe(
        map((res: { playlist: { tracks: Song[] } }) => res.playlist.tracks.slice(0, 10))
      );
  }

  // 新歌速递
  getNewSongs(): Observable<Song[]> {
    const params = new HttpParams({ fromString: 'type=0' });
    return this.http.get(API_ROOT + '/top/song', {params})
      .pipe(
        map((res: { data: Song[] }) => res.data.slice(0, 15))
      );
  }
}
