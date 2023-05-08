import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit,OnDestroy {
 mockTracksList1: Array<TrackModel> = []
 mockTracksList2: Array<TrackModel> = []
 listObserver$: Array<Subscription>=[]
  constructor(private TrackService:TrackService) { }

  ngOnInit(): void {
   
this.loadDataAll()
this.loadDataRandom()
    
  }

  loadDataAll () : void{
    this.TrackService.getAllTracks$().subscribe((response : TrackModel[]) =>{
      this.mockTracksList1 = response
     })
  }
  loadDataRandom() :void {
    this.TrackService.getAllRandom$().subscribe((response : TrackModel[]) =>{
      this.mockTracksList2 = response
     })
  }

  ngOnDestroy(): void {
  }

}
