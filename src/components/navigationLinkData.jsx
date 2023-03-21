import {Nav} from 'react-bootstrap'

const initialData = [
{name:  'home', icon: 'shop', to: '/'},
{name:  'flash', icon: 'lightning-charge-fill', to: '/flash'},
{name:  'feed', icon: 'heart-fill', to: '/feed'},
{name:  'popular', icon: 'fire', to: '/popular'},
{name:  'about', icon: 'question-circle-fill', to: '/about'}
]

export default function NavigationLinkData(){

	 return (
	 	  	initialData.map(data =>
	 	  		<Nav.Item key={data.name} className={'mx-auto'}>
					<div className=' h-100  overflow-hidden '>
						<Nav.Link href={data.to} className='px-1 d-flex justify-content-between align-items-center'>
						<i  className={`text-profile-icon text-dark fs-3  mx-auto bi bi-${data.icon}`}></i>
						<p className='text-navigation-style ms-1 my-auto'>{data.name}</p>
						</Nav.Link>
					</div>
	 	      	</Nav.Item>
	 	  	)
	 	  
	 )
	 
}




