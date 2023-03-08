import React,   {useState} from 'react'
import {Nav, Container} from 'react-bootstrap'


export default function header() {
  return (
    <>
        <Container className='mt-2'>
            <Nav variant='pills' defaultActiveKey={'/'}>
                <Nav.Item>
                    
                </Nav.Item>
            </Nav>
        </Container>
    </>
  )
}
