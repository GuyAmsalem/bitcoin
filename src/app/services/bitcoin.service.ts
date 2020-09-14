import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { utilService } from './util.service';
import {  BehaviorSubject } from 'rxjs';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private _btcRate$ = new BehaviorSubject<number>(0)
  public btcRate$ = this._btcRate$.asObservable()

  private async getRate(coins: number) {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`, {
    })
    this._btcRate$.next(res.data)
  }

  constructor(private UserService: UserService) {
    this.UserService.user$.subscribe(user => {
      this.getRate(user.coins)
    })
  }

  public async getTradeVolChartData() {
    const res = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true`, {
    })

    let lineChartData: ChartDataSets[] = [
      { data: [], label: "Million's $USD" }
    ]

    lineChartData[0].data = res.data.values.map(val => {
      return (parseInt(val.y) / 1000000).toFixed(3) 
    })

    let lineChartLabels: Label[] = []

    for (let i = 1; i < utilService.daysInMonth(); i += 5) {
      lineChartLabels.push(`'Day ${i}'`)
    }
    lineChartLabels.push('Day ' + utilService.daysInMonth())
    return { lineChartData, lineChartLabels }
  }


}



// public lineChartData: ChartDataSets[] = [
//   { data: [], label: 'USD' },
// ];
// public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

