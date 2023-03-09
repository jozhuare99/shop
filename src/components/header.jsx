import React,   {useState} from 'react'
import {Nav, Container, Form, Button, InputGroup} from 'react-bootstrap'


export default function Header() {
 return (
  <> 
   <Container className='mt-2'>
    <Nav variant='pills' defaultActiveKey={'/'}>
     <Nav.Item>
      <Form className="d-flex ">
      <InputGroup className="mb-3 text-input-group-search pe-3 d-flex justify-content-center align-content-center">
          <InputGroup.Text className='bg-white border-end-0 border-dark pe-1'><i className="bi bi-search text-search-icon"></i></InputGroup.Text>
      <Form.Control placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" className='textInputSearch rounded-end border-start-0 border-dark pe-5 text-dark bg-primary'/>
        <Button className='text-dark bg-white border-dark m-2 rounded-start position-absolute '>Search</Button>
      </InputGroup>
      <i className="bi bi-bag-fill"></i>
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
