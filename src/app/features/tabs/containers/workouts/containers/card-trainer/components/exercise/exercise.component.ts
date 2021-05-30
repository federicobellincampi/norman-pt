import { Component, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'nf-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit{
  
  @ViewChild('player') public videoPlayer: QueryList<any>;

  @Input() public urlVideo: string = '';
  @Input() public name: string = '';
  @Input() public reps: string = '';

  public safeURL: any;

  constructor(private _sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
  }

  public openFullScreen(elem): void {
    if(elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.webkitEnterFullscreen) {
      elem.webkitEnterFullscreen();
      // elem.enterFullscreen();
    }
    // this.platform.backButton.subscribeWithPriority(5, () => {
    //   elem.exitFullscreen(); 
    // });
  }


}
