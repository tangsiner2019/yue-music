import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ShareModule} from '../share/share.module';
import { CarouselComponent } from './home/carousel/carousel.component';
import {HomeComponent} from './home/home.component';
import {ServicesModule} from '../services/services.module';

@NgModule({
  declarations: [PagesComponent, HomeComponent, CarouselComponent],
  imports: [
    ShareModule,
    ServicesModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
