import {useState} from 'react'
import ModalDialog from './modalDialog'

export default function ModalEffect(){
    const [show, setShow] = useState(false)

    return(
        <>
        <button onClick={()=>setShow(!show)}>
            Open dialog
        </button>
        <ModalDialog isOpen={show}>
            hello there!
            <br />
            <button onClick={()=>{setShow(false)}}>Close</button>
        </ModalDialog>
        </>
    )
}