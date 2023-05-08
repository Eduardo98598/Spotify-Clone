import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], args:string | null = null,sort: string='asc' ): TrackModel[] {
    try{

      if(args===null)
      {
        return value
      }
      else{
        const tmpList= value.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        return (sort==='asc') ?tmpList : tmpList.reverse()

      }
    }
    catch(e){

      console.log('Ocurio un error en la pipe 😥');
      return value
    }
  }

}
