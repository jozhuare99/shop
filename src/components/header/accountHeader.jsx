import React,{} from 'react'
import {Nav, Container} from 'react-bootstrap'


export default function AccountHeader() {
  

 return ( 
  <>
   <Container className='m-0 border-dark px-2' fluid>
    <Nav variant='' className='p-0'>
      <Nav.Link href="/" className='d-flex'>
        <i role='button' className="pe-1 bi bi-shop"></i>
        <h5 className='my-auto'>Shop</h5>
      </Nav.Link>
      <Nav.Link href="/" className='d-flex'>
        <h5 className='my-auto'>Profile</h5>
      </Nav.Link>
      <Nav.Link href="/" className='d-flex'>
        <h5 className='my-auto'>Cart</h5>
      </Nav.Link>
      <Nav.Link href="/" className='d-flex border border-2 rounded-1 bg-info'>
        <h5 className='my-auto text-dark'>Seller Center</h5>
      </Nav.Link>
     </Nav>
  </Container>
 </>
 )
}

