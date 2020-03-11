import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Song} from '../../../types/common';

@Component({
  selector: 'app-hot-song-list',
  templateUrl: './hot-song-list.component.html',
  styleUrls: ['./hot-song-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotSongListComponent implements OnInit {
  @Input() list: Song[];

  constructor() { }

  ngOnInit(): void {
  }

}
