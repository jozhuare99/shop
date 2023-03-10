import {useRef} from 'react'
import {Nav, Container, Form, Button, InputGroup} from 'react-bootstrap'

const initialData = [
{name:  'home', icon: 'shop'},
{name:  'flash', icon: 'lightning-charge-fill'},
{name:  'feed', icon: 'heart-fill'},
{name:  'popular', icon: 'fire'},
{name:  'about', icon: 'question-circle-fill'}
]

export default function NavigationLinkData(){

	 return (
	 	  	initialData.map(data =>
	 	  		<Nav.Item key={data.name} className='mx-auto'>
	           <div className='profileContainer h-100 px-1 d-flex justify-content-between align-items-center'>
	             <i role='button' className={`text-profile-icon text-dark fs-3 me-1 bi bi-${data.icon}`}></i>
	             <p role='button' className='text-regular-style my-auto'>{data.name}</p>
	           </div>
	 	      </Nav.Item>
	 	  	)
	 	  
	 )
	 
}




