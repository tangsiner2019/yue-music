import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Song} from '../types/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  @ViewChild('slider', {static: true}) private slider: ElementRef;
  @ViewChild('audio', {static: true}) private audio: ElementRef;

  sliderDisabled = true;
  sliderValue = 0;
  playIcon = 'caret-right';
  timer;
  currentTime = 0;
  duration = 0;

  song: Song = {
    id: 1,
    name: '天下没有不散的宴席',
    duration: 0,
    isPlay: false
  };

  constructor() {
  }

  ngOnInit(): void {
    this.initPlayer();
  }

  pre() {}

  next() {}

  initPlayer() {
    this.audio.nativeElement.oncanplay = () => {
      if (this.song.duration < 1) {
        this.song.duration = this.audio.nativeElement.duration; // 歌曲时长
        this.duration = this.song.duration * 1000;
        this.sliderDisabled = false;
        this.stop();
      }
    };
  }

  pause() {
    clearInterval(this.timer);
    this.playIcon = 'caret-right';
    this.audio.nativeElement.pause();
    this.song.isPlay = false;
  }

  stop() {
    this.sliderValue = 0;
    this.currentTime = 0;
    this.audio.nativeElement.currentTime = 0;
    this.pause();
  }

  play() {
    if (this.song.duration < 1) {
      return;
    }
    if (this.song.isPlay) {
      this.pause();
      return;
    }

    this.playIcon = 'pause';
    this.audio.nativeElement.play();
    this.song.isPlay = true;

    this.timer = setInterval(() => {
      if (this.song.duration !== this.audio.nativeElement.currentTime) {
        this.sliderValue += 100 / (this.song.duration * 100); // 每10毫秒执行一次，1000 / 10 = 100
        this.currentTime = this.audio.nativeElement.currentTime * 1000;
      } else {
        this.stop();
      }
    }, 10);
  }

  onAfterChange(value: number) {
    if (value === 100) {
      this.stop();
      return;
    }
    this.audio.nativeElement.currentTime = value * this.song.duration / 100;
    if ( !this.song.isPlay) {
      this.play();
    }
  }
}
