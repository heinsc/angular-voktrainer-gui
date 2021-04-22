import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { AppUser } from '../app-user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  allAppUsers: AppUser[] = [];

  constructor(private appUserService: AppUserService) { }

  ngOnInit(): void {
    this.appUserService.getAllUsers().subscribe(
      (appUsers: AppUser[]) => {
        this.allAppUsers = appUsers;
        console.log (appUsers);
      }
    )
  }

}
