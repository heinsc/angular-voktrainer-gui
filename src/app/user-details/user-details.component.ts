import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { AppUser } from '../app-user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: AppUser;
  constructor(private userService: AppUserService) {
  }
  ngOnInit(): void {
    this.userService.getUserById(1).subscribe(
      (user: AppUser) => {
        this.user = user;
      }
    )
  }

}
