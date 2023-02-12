import * as React from 'react'
import {getImageUrl} from '../utils/personUtils'
// import { ChakraProvider, extendBaseTheme,  Box,Card, CardHeader, CardBody, CardFooter, Heading, Stack, Text ,StackDivider } from '@chakra-ui/react'
import Profiler from './Profiler';

export function AppCollapse() {
  return (
    <>
      <Profiler person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profiler person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  );
}



const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function Card1({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function Avatar3({person, size, profession, award, discover}){
  return(
    <section className='border border-dark rounded-3 p-3  my-3'>
      <h2>{person.name}</h2>
      <img 
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>{profession}
        </li>
        <li>
          <b>Award: {award.number} </b>{award.name}
        </li>
        <li>
          <b>Discovered: </b>{discover}
        </li>
      </ul>
    </section>
  )
}

function Avatar({person,size}){
  return(
    <img
    className='avatar'
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
    />
  )
}

export default function Profile() {
    return (
      <div style={person.theme}>
      <h1>{person.name}'s Todo's</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    )
  }

  export function Profile2(){
    const baseUrl = 'https://i.imgur.com/';
  const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'FFF',
    color: '000'
  }
};
    
    return(
      <div style={person.theme}>
      <h1>{person.name}'s Todo's</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    )
  }

  export function Profile3(){
    return (
      <div>
        <Avatar
        size={100}
        person={{
          name:'Katsuko Sahurashi',
          imageId:'YfeOqp2'
        }} 
        />
        <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <Avatar3
      person={{
        name: 'Maria Skłodowska-Curie',
        imageId: 'szV5sdG'
      }}
      size={70}
      profession='physicist and chemist'
      award={{
        number: 4,
        name: '(Nobel Prize in Physics, Nobel  Prize in Chemistry, Davy Medal, Matteucci Medal)'
      }}
      discover='polonium (element)'
      />
       <Avatar3
      person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}
      size={70}
      profession='Geochemist'
      award={{
        number: 2,
        name: '(Miyake Prize for geochemistry, Tanaka Prize)'
      }}
      discover='a method for measuring carbon dioxide '
      />
      <Card1>
      <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
      </Card1>
      <Card1>
      <h1>About</h1>
      <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card1>
      </div>
    )
  }