import IncomingMessage from '../IncomingMessage';
import IMessageEventHandler from '../IMessageEventHandler';
import App from '../../../App';
import PongComposer from '../../outgoing/handshake/PongComposer';

export default class PingEvent implements IMessageEventHandler {
  parse(message: IncomingMessage): void {
    App.instance.connection.sendMessage(new PongComposer());
  }
}