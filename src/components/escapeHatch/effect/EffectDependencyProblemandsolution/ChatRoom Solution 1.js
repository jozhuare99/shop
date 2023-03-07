import { useEffect, } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom({ options }) {
  const id = options.roomId
  const server = options.serverUrl

  useEffect(() => {
    const connection = createConnection({serverUrl: server, roomId: id});
    connection.connect();
    return () => connection.disconnect();
  }, [server,id]);

  return <h1>Welcome to the {options.roomId} room!</h1>;
}
