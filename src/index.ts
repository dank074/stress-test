import * as config from './config.json';
import ClientHelloComposer from './messages/outgoing/handshake/ClientHelloComposer';
import PongComposer from './messages/outgoing/handshake/PongComposer';
import SSOTicketComposer from './messages/outgoing/handshake/SSOTicketComposer';
import GetRoomEntryDataMessageComposer from './messages/outgoing/room/GetRoomEntryDataMessageComposer';
import MoveAvatarMessageComposer from './messages/outgoing/room/MoveAvatarMessageComposer';
import OpenFlatConnectionComposer from './messages/outgoing/room/OpenFlatConnectionComposer';
import WebSocketConnection from './network/WebSocketConnection';

const connections: WebSocketConnection[] = [];

(async () => {
    try {
        for (let i = 0; i < config.sso.length; i++) {
            const conn = new WebSocketConnection(config.url);
            await sleep(1000);
            conn.sendMessage(new ClientHelloComposer());
            conn.sendMessage(new SSOTicketComposer(config.sso[i]));
            await sleep(1000);
            conn.sendMessage(new OpenFlatConnectionComposer(config.roomId));
            conn.sendMessage(new GetRoomEntryDataMessageComposer());
            connections.push(conn);
    
            setInterval(() => {
                try {
                    let x = Math.floor((Math.random() * 10) + 1);
					let y = Math.floor((Math.random() * 20) + 1);
					conn.sendMessage(new MoveAvatarMessageComposer(x, y))
                } catch(e) {}
            }, 5000)

            setInterval(() => {
                try {
                    conn.sendMessage(new PongComposer());
                } catch (e) { }
            }, 10000)
    }
    } catch (e) {
        // Deal with the fact the chain failed
    }
})();

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}