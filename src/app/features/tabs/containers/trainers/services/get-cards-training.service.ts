import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { CardTraining } from '../../../../../models/card-training.model';

@Injectable()
export class GetCardsTrainingService {

  constructor(private angularFireDatabase: AngularFireDatabase, private storage: AngularFireStorage ) { }

  getCardsTraining(url: string): Observable<CardTraining[]> {
    //return this.angularFireDatabase.database.ref().child(url)
    console.log(url);
    return this.angularFireDatabase.list<CardTraining>(url).valueChanges();
  }

  // getVideo(): Observable<any> {
  //   return this.angularFireDatabase.list('schede/uomo/massa-muscolare').valueChanges();
  //  // console.log('test:',test);
  // }

}
