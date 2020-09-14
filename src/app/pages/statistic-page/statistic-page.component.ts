import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {BitcoinService} from '../../services/bitcoin.service'
import * as moment from 'moment';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.less']
})
export class StatisticPageComponent implements OnInit {

  public lineChartData: ChartDataSets[] 
  public lineChartLabels: Label[]
  public month = moment(Date.now()).format('MMMM, YYYY')

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private bitcoinService: BitcoinService) {
    bitcoinService.getTradeVolChartData()
   }

  ngOnInit(): void {
    this.bitcoinService.getTradeVolChartData().then(res => {
      this.lineChartData = res.lineChartData
      this.lineChartLabels = res.lineChartLabels
      console.log(this.lineChartData);
      
    })
  }

}
