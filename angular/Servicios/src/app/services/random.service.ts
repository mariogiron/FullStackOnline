import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://randomserver.ngrok.io';
  }

  getRandomNum(): Promise<any> {
    const body = {
      max: 38,
      min: 12
    };
    return this.httpClient.post(`${this.baseUrl}/random/num`, body).toPromise();
  }
}
