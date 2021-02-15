// ANGULAR
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
// RXJS
import {BehaviorSubject, Observable} from 'rxjs';
// OTHERS
import {environment} from "../../../environments/environment";

export class Pagination {
  size = 8;
  page = 1;
}

@Injectable()
export class CharacterService {

  apiBaseUrl = environment.app.apiBaseUrl;
  private pagination = new BehaviorSubject<any>(new Pagination());

  constructor(private http: HttpClient) {
  }

  sendPagination(object: any) {
    this.pagination.next(object);
  }

  currentPagination(): Observable<any> {
    return this.pagination.asObservable();
  }

  getPagination() {
    return this.pagination.getValue();
  }

  getCharacters(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`${this.apiBaseUrl}character/?page=${page}`, {observe: 'response'});
  }

}
