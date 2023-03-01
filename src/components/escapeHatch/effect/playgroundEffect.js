import{useState,useEffect}from'react'
function Playground(){
    const [text,setText]=useState('a')
    useEffect(()=>{
        function onTimeOut(){
            console.log(' Clock '+text )
        }
        console.log(' Schedule '+text+'log')
        const timeoutId = setTimeout(onTimeOut,3000)
        return()=>{
            console.log(' cancel '+ text + 'log')
            clearTimeout(timeoutId)
        }
    }, [text])
    return(
        <>
        <label>
            what to log:{' '}
            <input value={text} onChange={e=>setText(e.target.value)} />
        </label>
            h1 {text}
        </>
    )
}

export default function PlayEffect(){
    const [show, setShow] = useState(false)
    return(
        <>
        <button onClick={()=>setShow(!show)}>
            {show ? 'Unmount': 'Mount'} the component
        </button>
        {show && <hr />}
        {show && <Playground />}
        </>
    )
}