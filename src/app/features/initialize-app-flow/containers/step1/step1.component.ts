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

  @ViewChild("p", { read: ElementRef, static: true }) p: ElementRef;
  @ViewChild("h1", { read: ElementRef, static: true }) h1: ElementRef;
  @ViewChild("woman", { read: ElementRef, static: true }) woman: ElementRef;
  @ViewChild("man", { read: ElementRef, static: true }) man: ElementRef;
  @ViewChild("manImg", { read: ElementRef, static: true }) manImg: ElementRef;

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
    this.store.dispatch(GenderActions.checkGenderSelected());
    this.transformAnimationService.transformAnimationElements(
      [
        this.p.nativeElement,
        this.h1.nativeElement,
        this.woman.nativeElement,
        this.man.nativeElement,
        this.manImg.nativeElement
      ],
      200
    );
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
