import {useState, useEffect} from 'react'
import { Container, Stack, Card, Button, Form, InputGroup } from 'react-bootstrap'


export default function Chat(){
  const [showMessage, setShowMessage] = useState(false)
  return(
    <>
    <Container className='position-relative'>
      <div className='float-chat flip-horizontaly position-absolute'>
        <i role='button' onClick={()=>setShowMessage(!showMessage)} className='fs-1 bi bi-chat-fill text-black'></i>
      </div>
      <ChatBox showMessage={showMessage}/>
    </Container>
    </>
  )
}

function ChatBox({showMessage}){
  const [message, setMessage] = useState('Hello')


  return (
      showMessage && 
      <div className='chat-box  d-flex position-absolute'>
          <Stack gap={2} className='bottom'>

              <Card className=' border-0 chat-box-size overflow-auto'>
                <Card.Body>
                  <Stack className='flex-row justify-content-start mb-4'>
                    <i role='button' className='text-profile-icon text-dark fs-3  mx-auto bi bi-shop'></i>
                    <div className='p-2 ms-3 border border-dark rounded-2 bg-light' >
                      <p className=' small mb-0'>Hello and Thank you for visiting our Shop. hsajdhaksdhbash aksdhg iaysg dguyask d</p>
                    </div>
                  </Stack>

                  <Stack className='flex-row justify-content-end mb-4'>
                    <div className='p-2 border border-dark rounded-2 bg-light me-2'>
                      <p className=' small mb-0'>Hi how to order?</p>
                    </div>
                    <i role='button' className="user-profile-icon text-dark fs-3 bi bi-person-circle"></i>
                  </Stack>
                  
                  <Form className="p-0 m-0">
                    <Form.Group className="message-text d-flex justify-content-around align-items-end">
                      <Form.Control as="textarea" rows={2} name='chat-message' className='text-message-chat border-dark  me-2'/>
                      <Button className='btn-chat-send text-dark bg-white border-dark '>Send</Button>
                    </Form.Group>
                  </Form>

                </Card.Body>
            
                
            
              </Card>
          </Stack>
      </div>
  )

}