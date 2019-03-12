import { Component, Input, OnInit } from '@angular/core';
import {equal} from 'assert';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }
  getStatusEtat() {
    if(this.appareilStatus === 'éteint') {
      return true;
    } else {
      return false;
    }
  }
  getColor() {
    if(this.getStatusEtat()) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
