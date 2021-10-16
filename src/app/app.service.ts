import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  public getData(pageNumber: number, pageSize: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos?_start=${pageNumber}&_limit=${pageSize}`);
  }
}
