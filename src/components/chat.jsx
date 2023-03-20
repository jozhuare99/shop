import {useState, useEffect} from 'react'
import { Container, Stack, Card, Button, Form, InputGroup } from 'react-bootstrap'


export default function Chat(){

  return(
    <>
    <Container className='position-relative'>
      <div className='float-chat flip-horizontaly position-absolute'>
        <i role='button' onClick={()=>console.log('message open')} className='fs-1 bi bi-chat-fill text-black'></i>
      </div>
      <ChatBox/>
    </Container>
    </>
  )
}

function ChatBox(){
  const [message, setMessage] = useState('Hello')

  return (
  <div className='chat-box d-flex position-absolute bg-opacity-25 bg-warning'>
      <Stack gap={2} className='justify-content-center row'>

          <Card className=''>
            <Card.Body>
              <Stack className='flex-row justify-content-start mb-4'>
                <i role='button' className='text-profile-icon text-dark fs-3  mx-auto bi bi-shop'></i>
                <div className='p-3 ms-3 border' style={{borderRaduis: '15px', backgroundColor:'white'}}>
                  <p className=' small mb-0'>Hello and Thank you for visiting our Shop.</p>
                </div>
              </Stack>

              <Stack className='flex-row justify-content-end mb-4'>
                <div className='p-3 ms-3 border' style={{borderRaduis: '15px', backgroundColor:'white'}}>
                  <p className=' small mb-0'>Hi how to order?</p>
                </div>
                <i role='button' className="text-profile-icon pe-1 text-dark fs-3 bi bi-person-circle"></i>
              </Stack>
              
            </Card.Body>
            <Card.Footer>
              <Form className="p-0 m-0">
                <InputGroup className="text-input-group-search d-flex justify-content-end align-content-center">
                 <Form.Control placeholder="Samsung Galaxy" aria-label="Username" aria-describedby="basic-addon1" className='textInputSearch rounded border-dark py-0 my-0 text-dark'/>
                <Button className='btn-search text-dark bg-white  my-auto border-dark rounded-start'>Search</Button>
              </InputGroup>
              </Form>
            </Card.Footer>
          </Card>
      </Stack>
  </div>
  )

}