import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription
  contact: Contact

  constructor(private contactService: ContactService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')
      if (id) {
        this.subscription = this.contactService.getContactById(id).subscribe(contact => {
          this.contact = JSON.parse(JSON.stringify(contact));
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
