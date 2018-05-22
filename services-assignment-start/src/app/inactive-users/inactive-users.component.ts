import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: String[];
  constructor(private userSvc: UserService){}
  
  ngOnInit() {
    this.users= this.userSvc.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userSvc.setToActive(id);
  }
}
