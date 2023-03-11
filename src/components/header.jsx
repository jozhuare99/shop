import React,   {useRef ,useState, useEffect} from 'react'
import {Nav, Container, Form, Button, InputGroup} from 'react-bootstrap'
import NavigationLinkData from './navigationLinkData'


export default function Header({mobile, tablet, monitor}) {
  let windowWidthRef = useRef(0)
  

 return ( 
  <>
   <Container className='my-2 ' >
    <Nav variant='' defaultActiveKey={'/'} className='headerMaxHeight user-select-none p-0'>
      <div className='d-flex ps-2 flex-nowrap flex-grow-1'>
        <Nav.Item className="p-0 w-100 mx-auto">
          <Form className="p-0 m-0">
          <InputGroup className="p-0 m-0 text-input-group-search d-flex justify-content-end align-content-center">
            <InputGroup.Text className='bg-white border-end-0 border-dark pe-1  '><i className="bi bi-search text-search-icon my-0 "></i></InputGroup.Text>
          <Form.Control placeholder="Samsung Galaxy" aria-label="Username" aria-describedby="basic-addon1" className='textInputSearch rounded-end border-start-0 border-dark py-0 my-0 text-dark'/>
          <Button className='btn-search text-dark bg-white  my-auto border-dark rounded-start'>Search</Button>
        </InputGroup>
        </Form>
        </Nav.Item>
        <Nav.Item>
          <Container  className='h-100 cartBagContainer px-2'>
          <a href='/' onClick={()=>console.log('clicked')} className=' d-flex text-decoration-none align-items-center text-center justify-content-center'>
            <i role='button' className="text-cart-bag text-dark bi bi-bag-fill"></i>
            <p role='button' className='cartNumberCount text-white  position-absolute mx-auto mt-4 fs-4'>9</p>
            </a>
          </Container>
        </Nav.Item>
      </div>
      <div className={`w-auto float-end d-flex flex-nowrap flex-grow-1`}>
        <Nav.Item className='mx-auto'> 
          <div className='profileContainer h-100  d-flex justify-content-between align-items-center'>
            <i role='button' className="text-profile-icon pe-1 text-dark fs-3 bi bi-person-circle"></i>
            <p role='button' className='text-regular-style my-auto'>{monitor ? 'name..' : (tablet ? 'name..' : (mobile ? '' : ''))}</p>
          </div>
        </Nav.Item>
        <NavigationLinkData moreFS={monitor} tabScreen={tablet} mobileScreen={mobile}/>
      </div>
      
     </Nav>
  </Container>
 </>
 )
}

