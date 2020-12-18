export default class WebSocketConnection {
  private _webSocket: WebSocket;

  constructor(url: string) {
    this._webSocket = new WebSocket(url);
  }
}