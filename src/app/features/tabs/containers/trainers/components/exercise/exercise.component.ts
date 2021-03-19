import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../../../../../../models/card-training.model';

@Component({
  selector: 'nf-exercise',
  template: `
    <video [src]="exercise.url"></video>

    <ion-label>

      <ion-item slot="start">
        <img src="./avatar-finn.png">
        <h2>Serie: {{exercise.serie}}</h2>
      </ion-item>

      <ion-item slot="start">
        <img src="./avatar-finn.png">
        <h2>Ripetizioni: {{exercise.ripetizioni}}</h2>
      </ion-item>
      
      <ion-item slot="start">
        <img src="./avatar-finn.png">
        <h2>Recupero: {{exercise.reupero}}</h2>
      </ion-item>

    </ion-label>

  `,
  styles: [`

  `],
})
export class ExerciseComponent implements OnInit {

  @Input() exercise: Exercise = {
    url: '',
    serie: 3,
    ripetizioni: 3,
    reupero: '1 minuto'
  };

  constructor() { }

  ngOnInit() {}

}
