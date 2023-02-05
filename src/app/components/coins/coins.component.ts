import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko-service.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit{
  coins: any = [];

  constructor(private coingeckoService: CoingeckoService){

  }

  ngOnInit(): void {
    this.coins = this.coingeckoService.getAllCoins().subscribe(data => {
      this.coins = data;
    });
    
  }

}
