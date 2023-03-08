import React,   {useState} from 'react'
import {Nav, Container, Form, Button, InputGroup} from 'react-bootstrap'



export default function Header() {
  return (
    <>
        <Container className='mt-2'>
            <Nav variant='pills' defaultActiveKey={'/'}>
                <Nav.Item>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/shop'>
                        <i class="bi bi-bag-fill"></i>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    </>
  )
}
