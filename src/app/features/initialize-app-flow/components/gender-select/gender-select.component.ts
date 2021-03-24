import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "nf-gender-select",
  template: `
    <div
      class="container-gender"
      [ngClass]="{ 'container-gender-selected': selected }"
    >
      <img
        src="assets/img/{{img}}"
        [ngClass]="{ 'img-selected': selected }"
        (click)="!selected ? $selectEvent.emit() : null"
      />
    </div>
  `,
  styleUrls: ["./gender-select.component.scss"],  
})
export class GenderSelectComponent implements OnInit {

  @Input() img: string = '';
  @Input() selected: boolean = false; 

  @Output() $selectEvent: EventEmitter<void> = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}
}
