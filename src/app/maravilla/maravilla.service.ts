import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maravilla } from './maravilla';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaravillaService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Maravilla[]> {
    return this.http.get<Maravilla[]>(this.apiUrl);
  }
}
