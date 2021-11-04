import MessageComposer from "../MessageComposer";
import Outgoing from "../Outgoing";
import OutgoingMessage from "../OutgoingMessage";

export default class GetRoomEntryDataMessageComposer extends MessageComposer {
    
    serialize(message: OutgoingMessage): void {
      
    }
    
    getHeader(): number {
      return Outgoing.GetRoomEntryData;
    }
}