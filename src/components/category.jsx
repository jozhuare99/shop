import {Nav} from 'react-bootstrap'

export default function Categories(){

    return(
        <>
          <div className={`w-auto d-flex flex-nowrap `}>
          { initialCategory.map(data =>
	 	  		<Nav.Item key={data.name} className={'mx-auto'}>
					<div className='profileContainer h-100 px-1 d-flex overflow-hidden justify-content-between align-items-center'>
						<i role='button' className={`text-profile-icon text-dark fs-3  mx-auto bi bi-${data.icon}`}></i>
						<p role='button' className='text-navigation-style ms-1 my-auto'>{data.name}</p>
					</div>
	 	      	</Nav.Item>
          )}
          </div>
        </>
    )
}

const initialCategory = [
  {name:  'home', icon: 'shop'},
  {name:  'flash', icon: 'lightning-charge-fill'},
  {name:  'feed', icon: 'heart-fill'},
  {name:  'popular', icon: 'fire'},
  {name:  'about', icon: 'question-circle-fill'}
  ]
  