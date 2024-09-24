import { Test, TestingModule } from '@nestjs/testing';
import { WsMessengerGateway } from './ws-messenger.gateway';

describe('WsMessengerGateway', () => {
  let gateway: WsMessengerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsMessengerGateway],
    }).compile();

    gateway = module.get<WsMessengerGateway>(WsMessengerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
