import {Nav, Stack, Navbar, Container, Offcanvas} from 'react-bootstrap'
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
          
            <Navbar expand='md p-0'>
                <Navbar.Toggle aria-controls='offcanvassNavbar' />
                <Navbar.Offcanvas className='offcanvass-nav' id='offcanvassNavbar' aria-labelledby='offcanvassNavbar' placement='end'>
                  <Offcanvas.Header closeButton>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                  <div className='bottom-categories pt-1 bg-info'>
                    { initialSVG.map(data =>
                    <Nav.Item key={data.name} className={'mx-auto'}>
                    <div className='profileContainer h-100 px-1 d-flex align-items-center'>
                      <img role='button' src={data.icon} style={{width:'2.5rem',height:'2.5rem '}} className={`text-profile-icon text-dark mx-auto`} />
                    </div>
                    </Nav.Item>
                    )}
                  </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
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
  {name:  'electronics', icon: Electronics},
  {name:  'Appliances', icon: Appliances},
  {name:  'health', icon: Health},
  {name:  'games', icon: Games},
  {name:  'toys', icon: Toys},
  {name: 'pets', icon: Pet},
  {name: 'beauty', icon: Beauty},
  {name: 'womanFashion', icon: GirlsFashion},
  {name: 'manFashion', icon: MensFashion}
  ]
  
