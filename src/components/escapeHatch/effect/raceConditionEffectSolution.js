import {useState,useEffect} from 'react'

function fetchBio(person){
    const delay = person === 'Bob' ? 2000: 200
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('this is '+ person + ' bio')
        },delay)
    })
}

export default function Page(){
    const [person, setPerson] = useState('Alice')
    const [bio,setBio] = useState(null)

    useEffect(()=>{
        setBio(null)
        fetchBio(person).then(result=>{
            setBio(result)
        })
    }, [person])

    return(
        <>
        <select value={person} onChange={e=>{
            setPerson(e.target.value)
        }}>
            <option value='Alice'>Alice</option>
            <option value='Bob'>Bob</option>
            <option value='Taylor'>Taylor</option>
        </select>
        <hr />
        <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    )
}