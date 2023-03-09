import React,   {useState} from 'react'
import {Nav, Container, Form, Button, InputGroup} from 'react-bootstrap'


export default function Header() {
 return (
  <>
   <Container className='my-2 headerMaxHeight'>
    <Nav variant='' defaultActiveKey={'/'} className='headerMaxHeight p-0'>
     <Nav.Item className="p-0 m-0">
      <Form className="p-0 m-0">
      <InputGroup className="p-0 m-0 text-input-group-search d-flex justify-content-end align-content-center">
          <InputGroup.Text className='bg-white border-end-0 border-dark pe-1  '><i className="bi bi-search text-search-icon my-0 "></i></InputGroup.Text>
      <Form.Control placeholder="Samsung Galaxy" aria-label="Username" aria-describedby="basic-addon1" className='textInputSearch rounded-end border-start-0 border-dark py-0 my-0 text-dark'/>
        <Button className='btn-search text-dark bg-white  my-auto border-dark rounded-start'>Search</Button>
      </InputGroup>
      </Form>
      </Nav.Item>
      <Nav.Item className='user-select-none'>
        <Container  className='h-100 cartBagContainer px-2'>
        <a role='button' onClick={()=>console.log('clicked')} className=' d-flex text-decoration-none align-items-center text-center justify-content-center'>
          <i className="text-cart-bag text-dark bi bi-bag-fill"></i>
          <p className='cartNumberCount text-white  position-absolute mx-auto mt-4 fs-4'>9</p>
          </a>
        </Container>
      </Nav.Item>
      <Nav.Item>
        <div className='profileContainer'>
          <i className="text-profile-icon text-dark bi bi-person-circle"></i>
        </div>
      </Nav.Item>

     </Nav>
  </Container>
 </>
 )
}
