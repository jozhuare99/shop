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
                <i className="bi bi-search"></i>
                <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
                <i className="bi bi-bag-fill">test</i>
                </InputGroup>
                  <Button variant="outline-success">Search</Button>
                </Form>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/shop'>
                        
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    </>
  )
}
