import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../../../../core/core.module";
import { TransformAnimationService } from "../../../../animations/transform-animation.service";
import { getFooterDisable } from "../../store/selectors/ui.selectors";
import { getWomanSelected, getManSelected } from "../../store/selectors/gender.selectors";
// import { getGenderProfile } from "../../../../core/profile/store/profile.selectors";
import * as RouterActions from "../../../../core/router/store/router.actions";
import * as GenderActions from '../../store/actions/gender.actions';

@Component({
  selector: "nf-step1",
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit{

  @ViewChild("h2", { read: ElementRef, static: true }) h2: ElementRef;
  @ViewChild("p1", { read: ElementRef, static: true }) p1: ElementRef;
  @ViewChild("p2", { read: ElementRef, static: true }) p2: ElementRef;
  @ViewChild("donna", { read: ElementRef, static: true }) donna: ElementRef;
  @ViewChild("uomo", { read: ElementRef, static: true }) uomo: ElementRef;

  public getUomoSelected$: Observable<boolean> = this.store.pipe(select(getManSelected))
  public getDonnaSelected$: Observable<boolean> = this.store.pipe(select(getWomanSelected))
  public footerDisable$: Observable<boolean> = this.store.pipe(select(getFooterDisable));

  constructor(
    private store: Store<AppState>,
    private transformAnimationService: TransformAnimationService
  ) {}

  public ngOnInit(): void {
    // this.store.dispatch(GenderActions.checkGenderSelected());
  }

  public ionViewWillEnter(): void {
    //this.store.dispatch(GenderActions.checkGenderSelected());
    // this.transformAnimationService.transformAnimationElements(
    //   [
    //     this.h2.nativeElement,
    //     this.p1.nativeElement,
    //     this.p2.nativeElement,
    //     this.donna.nativeElement,
    //     this.uomo.nativeElement,
    //   ],
    //   200
    // );
  }

  public manSelected(): void {
    this.store.dispatch(GenderActions.manSelected());
  }

  public womanSelected(): void {
    this.store.dispatch(GenderActions.womanSelected());
  }

  public goToStep2(): void {
    this.store.dispatch(RouterActions.go({ path: ["init-flow/step2"] }));
  }

  public goInitialStep(): void {
    this.store.dispatch(RouterActions.back());
  }
}
