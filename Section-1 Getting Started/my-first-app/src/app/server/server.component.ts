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

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onButtonClick() {
        return this.username = '';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}