import React,   {useState} from 'react'
import {Nav, Container, Form, Button} from 'react-bootstrap'


export default function header() {
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
            </Nav>
        </Container>
    </>
  )
}
