import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';

@Injectable()
export class ReportingService {

  config = '';
  private skipGlobalErrorHandlingHeader: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {

    this.skipGlobalErrorHandlingHeader = this.skipGlobalErrorHandlingHeader.append('disable422', 'true');

  }

  getCharacters(): Observable<HttpResponse<any>> {
    return this.http.get(`https://rickandmortyapi.com/api/character`, {observe: 'response'});
  }

  getCharacterById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`, {observe: 'response'});
  }

  getLocations(): Observable<HttpResponse<any>> {
    return this.http.get(`https://rickandmortyapi.com/api/location`, {observe: 'response'});
  }

  getEpisodes(): Observable<HttpResponse<any>> {
    return this.http.get(`https://rickandmortyapi.com/api/episode`, {observe: 'response'});
  }

  getEpisodeById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://rickandmortyapi.com/api/episode/${id}`, {observe: 'response'});
  }

}
