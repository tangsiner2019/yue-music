import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../../../types/common';

@Component({
  selector: 'app-new-songs',
  templateUrl: './new-songs.component.html',
  styleUrls: ['./new-songs.component.less']
})
export class NewSongsComponent implements OnInit {
  @Input() list: Song[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
