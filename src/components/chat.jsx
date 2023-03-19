import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'


export default function Chat(){

  return(
    <>
    <Container>
      <div>
        <i className='float-chat flip-horizontaly position-absolute  bi bi-chat'></i>
      </div>
    </Container>
    </>
  )
}