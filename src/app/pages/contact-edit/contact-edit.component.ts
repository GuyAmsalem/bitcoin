import { Component, OnInit, AfterViewChecked, ViewChild, Input, ElementRef, AfterViewInit, ContentChildren, ViewChildren, Query, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';


@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.less']
})
export class ContactEditComponent implements OnInit, AfterViewInit {
  @ViewChild('nameInput') elInput: ElementRef

  subscription: Subscription
  contact: Contact

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }


  onSave(ev: Event) {
    ev.preventDefault()
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contacts');
  }

  onRemove() {
    var res = window.confirm('Are you sure?')
    if (!res) return
    if (!this.contact._id) {
      this.router.navigateByUrl('/contacts');
      return
    } 
    this.contactService.removeContact(this.contact._id)
    this.router.navigateByUrl('/contacts');
  }

  ngAfterViewInit(): void {
    this.elInput.nativeElement.select()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id')
      if (id) {
        this.subscription = this.contactService.getContactById(id).subscribe(contact => {
          this.contact = JSON.parse(JSON.stringify(contact));
        });
      } else {
        this.contact = {
          name: '',
          email: '',
          phone: ''
        }
      }
    })
  }

}
