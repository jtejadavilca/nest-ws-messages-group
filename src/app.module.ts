import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WsMessengerGateway } from './ws-messenger/ws-messenger.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WsMessengerGateway],
})
export class AppModule {}
