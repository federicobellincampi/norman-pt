import { Component, Input, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'nf-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent {
  
  @ViewChild('player') public videoPlayer: QueryList<any>;

  @Input() public urlVideo: string = '';
  @Input() public name: string = '';
  @Input() public reps: string = '';


  public openFullScreen(elem): void {
    if(elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.webkitEnterFullscreen) {
      elem.webkitEnterFullscreen();
      elem.enterFullscreen();
    }
  }

}
