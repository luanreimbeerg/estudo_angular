import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ParamValue } from '../models/param-value.model';

import { actorsResponse } from '../models/people.model';
import { QueryOptions } from '../models/query-options.model';



@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  public urlEmbossing = environment.endpointPeople;
  constructor(private http: HttpClient) { }


  public getActors(param?: Array<ParamValue>): Observable<actorsResponse> {
    return this.http
        .get<actorsResponse>(`${this.urlEmbossing}`)
        .pipe(map((response) => new actorsResponse(response)));
}

}
