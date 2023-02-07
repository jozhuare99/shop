import React from 'react'
import {Nav, Container} from 'react-bootstrap'

export default function Header() {
  return (
    <div>
        <Container className='mt-2'>
            <Nav variant='pills' defaultActiveKey='/shop'>
                <Nav.Item>
                    <Nav.Link href='/shop'>Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='/login'>login</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    </div>
  )
}
