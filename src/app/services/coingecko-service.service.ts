import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {
  readonly API_ENDPOINT = "https://api.coingecko.com/api/"
  readonly API_VERSION = "v3"
  readonly API = `${this.API_ENDPOINT}${this.API_VERSION}`
  coins: any = [];
  constructor(private httpClient: HttpClient) { 
    
  }

  getAllCoins(){
    return this.httpClient.get(`${this.API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
  }
}
