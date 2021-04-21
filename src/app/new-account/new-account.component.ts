import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  allAppUsers = [];

  constructor(private appUserService: DataService) { }

  ngOnInit() {

    this.appUserService.sendGetRequestAppUsers().subscribe((appUsers: any[])=>{
      console.log(appUsers);
      this.allAppUsers = appUsers;
    })  
  }

}
