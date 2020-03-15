import {Component, Input, OnInit} from '@angular/core';
import {Artist} from '../../../types/common';

@Component({
  selector: 'app-hot-artists',
  templateUrl: './hot-artists.component.html',
  styleUrls: ['./hot-artists.component.less']
})
export class HotArtistsComponent implements OnInit {
  @Input() list: Artist[];
  constructor() { }

  ngOnInit(): void {
  }

}
