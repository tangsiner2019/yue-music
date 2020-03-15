import {NgModule} from '@angular/core';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {ShareModule} from '../share/share.module';
import {CarouselComponent} from './home/carousel/carousel.component';
import {HomeComponent} from './home/home.component';
import {ServicesModule} from '../services/services.module';
import {HotPlayListComponent} from './home/hot-play-list/hot-play-list.component';
import {HotSongListComponent} from './home/hot-song-list/hot-song-list.component';
import {HotArtistsComponent} from './home/hot-artists/hot-artists.component';
import {NewSongsComponent} from './home/new-songs/new-songs.component';


@NgModule({
  declarations: [
    PagesComponent, HomeComponent, CarouselComponent, HotPlayListComponent, HotSongListComponent, HotArtistsComponent, NewSongsComponent
  ],
  imports: [
    ShareModule,
    ServicesModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
