import IncomingMessage from '../IncomingMessage';
import MessageEvent from '../MessageEvent';

export default class PingEvent extends MessageEvent {
  parse(message: IncomingMessage): void {
    // empty message
  }
  handle(): void {
    
  }
}