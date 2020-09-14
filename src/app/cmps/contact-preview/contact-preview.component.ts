import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.less']
})
export class ContactPreviewComponent {

  @Input() contact: Contact
  
  public get firstChar() : string {
    return this.contact.name.charAt(0)
  }
  
}
