import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.less']
})
export class ContactsPageComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = JSON.parse(JSON.stringify(contacts));
    });
  }
  ngOnInit(): void {
    // For reseting the list with empty filter
    this.contactService.loadContacts({term: ''})
  }

  filterContacts(filterBy: object) : void {
    this.contactService.loadContacts(filterBy)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
