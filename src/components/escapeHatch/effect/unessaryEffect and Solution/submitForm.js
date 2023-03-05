import {useState, useEffect} from 'react'


export default function Form(){
    const [showForm, setShowForm] = useState(true);
    const [message, setMessage] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setShowForm(false)
        sendMessage(message)
    }

  return (
    <>
        {!showForm ? (
            <>
                <h1>Thanks for using our services!</h1>
                <button onClick={()=>{
                    setMessage('')
                    setShowForm(true)
                }}>Open Chat</button>
            </>
        ) : (
            <form onSubmit={handleSubmit}>
                <textarea placeholder='Message' value={message} onChange={e=>setMessage(e.target.value)} />
                <button type='submit' disabled={message === ''}>
                    Send
                </button>
            </form>
        )}


    </>
  )
}


function sendMessage(message){
    console.log('message as '+ message)
}