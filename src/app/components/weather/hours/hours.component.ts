import { Component, OnInit, Input } from '@angular/core';
import { ApiConstants } from '../../../util/api.constants';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  @Input() city: any;
  @Input() cityName: any;
  maxItems = ApiConstants.MAX_ITEMS;

  constructor() { }

  ngOnInit() {
    console.log(this.city);
  }

}
