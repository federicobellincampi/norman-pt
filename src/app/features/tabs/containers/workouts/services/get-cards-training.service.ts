import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DB } from '../../../../../models/db.model';
@Injectable()
export class GetCardsTrainingService {

  constructor(private httpClient: HttpClient) { }

  public getCardsTrainingDB(): Observable<DB> {
    return this.httpClient.get<DB>('assets/db.json')
  }

}
