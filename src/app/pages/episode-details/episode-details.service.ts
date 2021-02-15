import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class EpisodeDetailsService {

  apiBaseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getEpisodeById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBaseUrl}episode/${id}`, {observe: 'response'});
  }

}
