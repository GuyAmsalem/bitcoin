import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.less']
})
export class ContactFilterComponent  {
  public filterBy = {
    term: ''
  }

  @Output() onFilter = new EventEmitter<any>();

  constructor() { }
}
