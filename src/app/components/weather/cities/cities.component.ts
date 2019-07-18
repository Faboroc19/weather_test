import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  @Input() cities: any;
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  viewMore(item) {
    this.open.emit(item);
  }

}
