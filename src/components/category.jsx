import {Nav} from 'react-bootstrap'
import Appliances from '../assets/SVG/cat-appliances.svg'
import Beauty from '../assets/SVG/cat-beauty.svg'
import Electronics from '../assets/SVG/cat-electronics.svg'
import Games from '../assets/SVG/cat-games.svg'
import GirlsFashion from '../assets/SVG/cat-girlsfashion.svg'
import Health from '../assets/SVG/cat-heath.svg'
import MensFashion from '../assets/SVG/cat-menfashion.svg'
import Pet from '../assets/SVG/cat-pet.svg'
import Toys from '../assets/SVG/cat-toys.svg'

export default function Categories(){

    return(
        <>
          <div className={`w-auto d-flex flex-nowrap pt-1`}>
          { initialSVG.map(data =>
	 	  		<Nav.Item key={data.name} className={'mx-auto'}>
					<div className='profileContainer h-100 px-1 d-flex align-items-center'>
            <img role='button' src={data.icon} style={{width:'2.5rem',height:'2.5rem '}} className={`text-profile-icon text-dark mx-auto`} />
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
  

const initialSVG= [
  {name:  'flash', icon: Appliances},
  {name:  'appliances', icon: Beauty},
  {name:  'health', icon: Health},
  {name:  'games', icon: Games},
  {name:  'toys', icon: Toys},
  {name: 'pets', icon: Pet},
  {name: 'beauty', icon: Beauty},
  {name: 'womanFashion', icon: GirlsFashion},
  {name: 'manFashion', icon: MensFashion}
  ]
  
