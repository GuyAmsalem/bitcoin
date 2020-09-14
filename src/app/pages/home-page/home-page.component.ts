import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnDestroy, OnInit {
  userSubscription: Subscription
  btcSubscription: Subscription
  user: User
  btcRate: number

  constructor(private userService: UserService, private bitcoinService: BitcoinService) {
  }
  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = JSON.parse(JSON.stringify(user));
    });
    
    this.btcSubscription = this.bitcoinService.btcRate$.subscribe(btcRate => {
      this.btcRate = btcRate
    })
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.btcSubscription.unsubscribe();
  }

}
