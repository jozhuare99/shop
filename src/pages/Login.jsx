import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { ToastContainer, toast } from "react-toastify"
import {Form, Button,Container} from 'react-bootstrap'

export default function Login(){
    const [cookies] = useCookies([])
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if(cookies.jwt){
            navigate("/");
        }
    },[cookies, navigate])
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const generateError = (err)=>{
        toast.error(err)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:2010/login",
                {
                    ...values,
                },
                {
                    withCredentials: true
                }
            )
            if(data){
                if(data.errors){
                    const {username, password} = data.errors
                    if(username) {
                        generateError(username)
                        return
                    }
                    generateError(password)
                } else {
                    if(rememberMe){
                      localStorage.setItem('username', values.username)
                      localStorage.setItem('password', values.password)
                    }
                    navigate("/header/")
                }
            }

        } catch (ex) {
          console.log(ex);
        }
    }

    return (
      <>
        <Container>
          <h2>Login to your Account</h2>
          
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='mb-3' controlId='UserId'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name="username" placeholder='Username' onChange={(e) => {
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value
                  })
                }} />
                <Form.Text className='text-muted'>
                    Username
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId='UserPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name="password" placeholdder="Password"
                onChange={(e)=>{
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value
                  })
                }} />
            </Form.Group>

            <Form.Group className='mb=3' controlId="RememberMeCheckBox">
                <Form.Check type="checkbox" onChange={()=>setRememberMe(!rememberMe)} label="Remember Me" />
            </Form.Group>

            <Button variant='primary' type='submit'>Login</Button>

            <Container>
              <span>
                Don't have an account ? <Link to="/register">Register</Link>
              </span>
            </Container>

        </Form>
        <ToastContainer />
        </Container>
      </>
    )

}