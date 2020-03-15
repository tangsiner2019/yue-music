import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import {ShareModule} from '../share/share.module';
import {ServicesModule} from '../services/services.module';



@NgModule({
  declarations: [PlayerComponent],
  exports: [
    PlayerComponent
  ],
  imports: [
    ShareModule,
    ServicesModule,
  ]
})
export class PlayerModule { }
