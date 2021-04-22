import { Component, OnInit } from '@angular/core';
import { AppuserServiceService } from '../appuser-service.service';

@Component({
  selector: 'app-appuser',
  templateUrl: './appuser.component.html',
  styleUrls: ['./appuser.component.css']
})
export class AppuserComponent implements OnInit {
  appUsers;
  constructor(private appuserService: AppuserServiceService) { }

  ngOnInit(): void {
    this.appuserService.getAllUsers().subscribe(
      data => {
        console.log (data);
        this.appUsers = data;
      }
    )
  }

}
