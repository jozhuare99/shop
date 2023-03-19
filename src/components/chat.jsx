import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'


export default function Chat(){

  return(
    <>
    <Container className='position-relative'>
      <div className='float-chat flip-horizontaly position-absolute'>
        <i role='button' className='fs-1 bi bi-chat-fill text-info border-light border-2'></i>
      </div>
    </Container>
    </>
  )
}