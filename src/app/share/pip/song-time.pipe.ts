import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songTime'
})
export class SongTimePipe implements PipeTransform {

  transform(time: number): string {
    if (time === 0) {
      return '00:00';
    }
    time = Math.floor(time / 1000);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);
    let str = minutes < 10 ? '0' : '';
    str += minutes;
    str +=  seconds < 10 ? ':0' : ':';
    str += seconds;
    return str;
  }

}
