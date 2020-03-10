import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Banner} from '../types/common';
import {HttpClient} from '@angular/common/http';
import {API_ROOT} from '../config/config';
import {map} from 'rxjs/operators';
import {ServicesModule} from './services.module';

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
        map((res: {banners: Banner[]}) => res.banners)
      );
  }
}
