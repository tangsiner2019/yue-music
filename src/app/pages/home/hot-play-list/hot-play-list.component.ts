import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {PlayList, PlayListTag} from '../../../types/common';

@Component({
  selector: 'app-hot-play-list',
  templateUrl: './hot-play-list.component.html',
  styleUrls: ['./hot-play-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotPlayListComponent implements OnInit {
  @Input() playList: PlayList[];
  @Input() tags: PlayListTag[];
  constructor() { }

  ngOnInit(): void {

  }

}
