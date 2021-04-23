import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get("http://192.168.178.35:8080/appUsers");
  }
  getUserById(id) {
    return this.httpClient.get(`http://192.168.178.35:8080/appUsers/${id}`)
  }
}
