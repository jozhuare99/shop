import React, {useState, useEffect} from 'react'
import {createConnection } from './chat'

export default function ChatRoom({options}) {

    useEffect(() => {
        const connection = createConnection(options)
        connection.connect()
        return () => {
            connection.disconnect()
        };
    }, [options]);
  return (
    <div>
      <h1>Welcome to the {options.roomId} room!</h1>
    </div>
  )
}
