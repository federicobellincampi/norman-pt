import { Component } from '@angular/core';

@Component({
  selector: 'nf-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {

  public open: boolean = true;

  public openInfo(): void {
    this.open = !this.open;
  }


}
