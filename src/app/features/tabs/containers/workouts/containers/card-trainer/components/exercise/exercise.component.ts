import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'nf-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, AfterViewInit {

  @Input() public urlVideo: string = '';
  @Input() public name: string = '';
  @Input() public reps: string = '';

  public videoLoaded: boolean = false;
  public safeURL: SafeResourceUrl;
  public player;

  constructor(private _sanitizer: DomSanitizer) {}

  public ngAfterViewInit(): void {}

  public ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
  }


}
