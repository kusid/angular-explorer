import {Component} from "@angular/core";

@Component({
  selector: 'server-component',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 100;
  serverStatus: string = 'offline';

  serverCreationStatus: string = "No server was created!";

  username: string = '';

  getServerStatus(): string {
    return this.serverStatus;
  }

  disabled: boolean = false;

  constructor() {
    setTimeout(() => {
      this.disabled = true;
    }, 3000)
  }

  createServer() {
    this.serverCreationStatus = "Server was created by " + this.username;
  }

  resetServer() {
    if (this.username.length != 0) {
      this.username = '';
    }
  }


}
