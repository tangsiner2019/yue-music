import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Banner} from '../../../types/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush // 变更检测，在@Input发生变化时，才做更新
})
export class CarouselComponent implements OnInit {
  @Input() banners: Banner[];
  constructor() { }

  ngOnInit(): void {
  }

}
