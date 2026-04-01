import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { HomeResponse } from '../interfaces';
import { GetHome } from '../mocks/get-home.mock';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  // TODO: implementar endpoint /api/home
  public getHome(): Observable<HomeResponse> {
    return of(GetHome).pipe(delay(1500));
  }
}
