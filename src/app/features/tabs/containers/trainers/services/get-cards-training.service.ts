import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MuscleGroupModel } from '../../../../../models/muscle-group';
@Injectable()
export class GetCardsTrainingService {

  constructor(private angularFireDatabase: AngularFireDatabase ) { }

  public getCardsTraining(url: string): Observable<MuscleGroupModel[]> {
    return this.angularFireDatabase.list<MuscleGroupModel>(url).valueChanges();
  }

}
