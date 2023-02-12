import React from 'react'
import {getImageUrl} from '../utils/personUtils'
import {peoplesData} from './Data'
import { Fragment } from 'react';

const peoples = [ 
    'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
]
const Scientist = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

export default function People() {
    const listPeople = peoples.map((list,i)=><li key={i}>{list}</li>)
  return (
    <div>
      <ul>{listPeople}</ul>
    </div>
  )
}
export function ExpertScientist(){
    const isChemist = Scientist.filter((a)=> a.profession === 'chemist'
    )
    const listChemist = isChemist.map((a,i)=>{return (
    <li key={a.id || i+1}>
      {a.name} {a.profession}
     </li>)})
    return (
        <div>
            <ul>{listChemist}</ul>
        </div>
    )
}

export  function List2() {
  const chemists = peoplesData.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


export  function List3() {
  const listItems = peoplesData.map(person =>
    <li key={person.id}>
      <Fragment key={person.id}>
       <h5>{person.name}</h5>
      <p>{person.profession}</p>
    </Fragment>
    </li>
  );
  return <ul>{listItems}</ul>;
}



export function List4() {
  const chemists = peoplesData.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = peoplesData.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

