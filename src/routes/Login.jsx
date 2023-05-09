import {Form, Button} from 'react-bootstrap'


export default function LogIn(){
    return (
    <>
        <Form>
            <Form.Group className='mb-3' controlId='UserId'>
                <Form.Label>User Name</Form.Label>
                <Form.Control type='text' placeholder='Username' />
                <Form.Text className='text-muted'>
                    UserName
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId='UserPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholdder="Password" />
            </Form.Group>

            <Form.Group className='mb=3' controlId="RememberMeCheckBox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <Button variant='primary' type='submit'>Login</Button>
        </Form>
    </>)
}