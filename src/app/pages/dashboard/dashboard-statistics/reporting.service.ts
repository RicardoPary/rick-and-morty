import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Injectable()
export class ReportingService {

  apiBaseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getCharacters(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBaseUrl}character/?page=${page}`, {observe: 'response'});
  }

  getCharacterById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBaseUrl}character/${id}`, {observe: 'response'});
  }

  getEpisodeById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBaseUrl}episode/${id}`, {observe: 'response'});
  }

}
