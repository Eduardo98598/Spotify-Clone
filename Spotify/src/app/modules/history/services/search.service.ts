import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private readonly URL = environment.api
  constructor(private http: HttpClient) { }


  searchTracks$(exp:string):Observable<any>
  {
    return this.http.get(`${this.URL}/tracks?src=${exp}`)
    .pipe(
      map((dataRaw:any) => dataRaw.data)
    )
  }
}
