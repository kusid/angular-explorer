import {Component} from "@angular/core";

@Component({
  selector: 'server-component',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverId: number = 100;
  serverStatus: string = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }

  disabled: boolean = false;

  constructor() {
    setTimeout( () => {
      this.disabled = true;
    }, 3000)
  }
}
