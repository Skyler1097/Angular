import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string  = '';

  emptyField = true;
  clearedField = "";
  constructor(){
    setTimeout(()=>{this.allowNewServer = true}, 2000);
  }
  ngOnInit(){}
  onCreateServer(){
    this.serverCreationStatus = this.serverName + " server was created!"
  }
  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    this.emptyField = false;
    this.clearedField = this.serverName;
  }
  clearField(){
    this.serverName = "";
    this.clearedField =  "";
    this.serverCreationStatus = 'No server was created!'
  }  
}