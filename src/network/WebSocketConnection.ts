import ByteBuffer from 'bytebuffer';
import App from '../App';
import IncomingMessage from '../messages/incoming/IncomingMessage';
import ClientHelloComposer from '../messages/outgoing/handshake/ClientHelloComposer';
import MessageComposer from '../messages/outgoing/MessageComposer';
import PacketManager from "../messages/PacketManager";
import WebSocketClient, { IBinaryMessage, Message } from 'websocket'

export default class WebSocketConnection {
  private _socket: WebSocketClient.client;
  private _connection?: WebSocketClient.connection;
  //private _packetManager: PacketManager;

  constructor(url: string) {
    //this._packetManager = packetManager;
    this._socket = new WebSocketClient.client();
    //this._socket.binaryType = 'arraybuffer';
    this._socket.on('connect', (connection) => {
      this._connection = connection;

      this._connection.on('close', this.onClose);
      this._connection.on('message', this.onMessage);
      this._connection.on("error", this.onError);
    });

    this._socket.connect(url);
  }

  private onOpen(): void {
    //App.instance.connection.sendMessage(new ClientHelloComposer());
  }

  private onClose(): void {
    console.log("connection closed");
  }

  private onMessage(event: Message): void {
    
    let buffer = ByteBuffer.wrap((event as IBinaryMessage).binaryData);
    if(buffer.remaining() < 6) return;

    let length = buffer.readInt();
    let header = buffer.readShort();
    /*
    if(App.instance.connection.packetManager.events.get(header)) {
      App.instance.connection.packetManager.events.get(header)!.parse(new IncomingMessage(header, buffer));// todo: separate parsing and handling logic
    } else {
      console.log(`unsupported message: ${event.data}`);
    }
    */ // do nothing
  }

  private onError(event: Error): void {
    console.log(event);
  }

  public sendMessage<T extends MessageComposer>(msg: T): void {
    if(!this._connection) return;

    this._connection.send(msg.getMessage().content.toBuffer());
  }

  /*
  public get packetManager(): PacketManager {
    return this._packetManager;
  }
  */
}