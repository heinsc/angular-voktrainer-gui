import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppuserServiceService {

  constructor(private httpClient: HttpClient) { }

  public getAllUsers() {
    return this.httpClient.get('localhost:8080/appusers')
  }
}
