import { Logger } from "@nestjs/common";
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'net';
import { Server } from "socket.io";

@WebSocketGateway({cors: true})
export class WsMessengerGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect 
{
  private readonly logger = new Logger(WsMessengerGateway.name);

  @WebSocketServer() io: Server;

  handleDisconnect(client: any) {
    console.log('handleDisconnect');
  }

  afterInit(server: any): any {
    console.log('Start ws-messenger gateway "server":');
  }
  handleConnection(client: any, ...args: any[]): any {
    console.log('handleConnection');
    const { sockets } = this.io.sockets;

    this.logger.log(`Client id: ${client.id} connected`);
    this.logger.debug(`Number of connected clients: ${sockets.size}`);
  }
  

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log('payload', payload);
    console.log('client', client);
    return 'Hello world!';
  }
  

  @SubscribeMessage('subscribe')
  handleSubscription(client: any, payload: any): string {
    console.log('payload', payload);
    console.log('client', client);
    return 'Hello world!';
  }

  @SubscribeMessage('events')
  handleEvent(client: Socket, data: string): string {
    console.log('data', data);
    console.log('client', client);
    return data;
  }
}
