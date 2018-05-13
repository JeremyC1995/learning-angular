import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server added';
  serverName='Testserver';
  serverCreated=false;
  servers = ['t1', 't2'];

  constructor() { 
    // setTimeout(()=>{
    //   this.allowNewServer = true;
    // },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.serverCreationStatus= 'server was created! Name is '+this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
