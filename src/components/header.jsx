import React,   {useState} from 'react'
import {Nav, Container, Form, Button, InputGroup} from 'react-bootstrap'



export default function Header() {
  return (
    <>
        <Container className='mt-2'>
            <Nav variant='pills' defaultActiveKey={'/'}>
                <Nav.Item>
                <Form className="d-flex">
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
                </InputGroup>
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
