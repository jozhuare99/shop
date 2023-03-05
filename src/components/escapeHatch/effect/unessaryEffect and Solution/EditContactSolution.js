import {useState,useEffect} from 'react'

export default function EditContact(prop){
    return(
        <EditForm {...prop} key={prop.savedContact.id} />
    )
}


function EditForm({savedContact, onSave}){
    const [name, setName] = useState(savedContact.name)
    const [email, setEmail]= useState(savedContact.email)

    return (
        <section>
            <label>
                Name: {' '}
                <input type='text' value={name} onChange={e=>setName(e.target.value)} />
            </label>
            <label>
                Email: {' '}
                <input type='email' value={email} onChange={e=>setEmail(e.target.value)}/>
            </label>
            <button onClick={()=>{
                const updateDate ={
                    id: savedContact.id,
                    name: name,
                    email: email
                }
                onSave(updateDate)
            }} >
                Save
            </button>
            <button onClick={()=>{
                setName(savedContact.name)
                setEmail(savedContact.email)
            }}>
                Reset
            </button>
        </section>
    )
} 