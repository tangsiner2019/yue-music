import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlayCountPipe } from './pip/play-count.pipe';
import { SongTimePipe } from './pip/song-time.pipe';



@NgModule({
  declarations: [PlayCountPipe, SongTimePipe],
  imports: [

  ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        PlayCountPipe,
        SongTimePipe,
    ]
})
export class ShareModule { }
