import { useEffect, useEffectEvent } from 'react';
import { createConnection } from './chat.js';
import { showNotification } from './notifications.js';

export function useChatRoom({ serverUrl, roomId,  onReceiveMessage }) {
  //received message latest value but not reactive 
  const onMessage = useEffectEvent(onReceiveMessage);


  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      onMessage(msg)
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
