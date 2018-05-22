import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: String[];
  constructor(private userSvc: UserService){}

  ngOnInit() {
    this.users= this.userSvc.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userSvc.setToInactive(id);
  }
}
