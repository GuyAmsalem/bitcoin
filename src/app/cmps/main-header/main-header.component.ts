import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent {
  @ViewChild('menu') elMenu: ElementRef
  constructor() { }

  openMenu() {
    this.elMenu.nativeElement.classList.toggle('open')
  }

  closeMenu() {
    setTimeout(() => {
      this.elMenu.nativeElement.classList.remove('open')
    }, 200);
  }

}
