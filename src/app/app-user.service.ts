import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private httpClient: HttpClient) { }
  getAllUsers() {
    return this.httpClient.get("http://localhost:8080/appUsers");
  }
  getUserById(id) {
    return this.httpClient.get(`http://localhost:8080/appUsers/${id}`)
  }
}
