import MessageComposer from "../MessageComposer";
import Outgoing from "../Outgoing";
import OutgoingMessage from "../OutgoingMessage";

export default class SSOTicketComposer extends MessageComposer {
    private _sso: string;

    constructor(sso: string)
    {
        super();
        this._sso = sso;
    }

    serialize(message: OutgoingMessage): void {
      message.appendString(this._sso);
    }
    
    getHeader(): number {
      return Outgoing.SsoTicketComposer;
    }
  }