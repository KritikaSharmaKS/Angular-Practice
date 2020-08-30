import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "online"
    username = "type your name here";

    getServerStatus() {
        return this.serverStatus;
    }

    onButtonClick() {
        return this.username = '';
    }


}