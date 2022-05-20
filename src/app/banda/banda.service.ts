import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from './banda';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }
}
