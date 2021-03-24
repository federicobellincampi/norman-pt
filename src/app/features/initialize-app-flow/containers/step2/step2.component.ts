import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getGenderProfile } from '../../../../core/profile/store/profile.selectors';
import { AppState } from '../../../../core/core.module';
import { getFooterDisable } from "../../store/selectors/ui.selectors";
import { getLoseWeightSelected, getMuscleMassSelected, getToningSelected } from '../../store/selectors/goal-training.selectors';
import { TransformAnimationService } from '../../../../animations/transform-animation.service';
import * as ProfileActions from '../../../../core/profile/store/profile.actions';
import * as RouterActions from '../../../../core/router/store/router.actions';
import * as GoalTrainingActions from '../../store/actions/goal-training.actions';

@Component({
  selector: 'nf-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.scss'],
})
export class Step2Component implements OnInit{

  public footerDisable$: Observable<boolean> = this.store.pipe(select(getFooterDisable));
  public getGenderProfile$: Observable<'uomo'| 'donna'> = this.store.pipe(select(getGenderProfile));
  public getMuscleMassSelected$: Observable<boolean> = this.store.pipe(select(getMuscleMassSelected));
  public getToningSelected$: Observable<boolean> = this.store.pipe(select(getToningSelected));
  public getLoseWeightSelected$: Observable<boolean> = this.store.pipe(select(getLoseWeightSelected));
  
  @ViewChild('h1', { read: ElementRef, static: true }) h1: ElementRef;
  @ViewChild('p', { read: ElementRef, static: true }) p: ElementRef;
  @ViewChild('label', { read: ElementRef, static: true }) label: ElementRef;
  @ViewChild('row1', { read: ElementRef, static: true }) row1: ElementRef;
  @ViewChild('row2', { read: ElementRef, static: true }) row2: ElementRef;

  constructor(
    private store: Store<AppState>,
    private transformAnimationService: TransformAnimationService
    ) {}

  public ngOnInit(): void {
    //this.store.dispatch(GoalTrainingActions.checkGoalTrainingSelected())
  }

  public ionViewWillEnter(): void {
    this.store.dispatch(GoalTrainingActions.checkGoalTrainingSelected())
    this.transformAnimationService.transformAnimationElements(
      [
        this.h1.nativeElement,
        this.p.nativeElement,
        // this.label.nativeElement,
        this.row1.nativeElement,
        this.row2.nativeElement
      ],
      200
    );
  }

  public muscleMassSelected(): void {
    this.store.dispatch(GoalTrainingActions.muscleMassSelected());
  }

  public toningSelected(): void {
    this.store.dispatch(GoalTrainingActions.toningSelected());
  }

  public loseWeightSelected(): void {
    this.store.dispatch(GoalTrainingActions.loseWeightSelected());
  }

  public goToTrainers(): void {
    this.store.dispatch(ProfileActions.saveProfile())
    this.store.dispatch(RouterActions.go({ path: ['tabs'] }))
  }

  public goToStep1(): void {
    this.store.dispatch(RouterActions.back())
  }

}
