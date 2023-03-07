import {useState, useEffect, useRef} from 'react'
import {experimental_useEffectEvent as useEffectEvent} from 'react'
import {FadeInAnimation} from './animation'

function Welcome({duration}){
    const ref = useRef(null)

    // solution 1
    // const onAppear = useEffectEvent(animation => {
    //     animation.start(duration);
    //   });

    //   useEffect(()=> {
    //     const animation = new FadeInAnimation(ref.current)
    //     onAppear(animation)

    //     return()=>{
    //         animation.stop()
    //     }
    // }, [duration])


    useEffect(()=> {
        const animation = new FadeInAnimation(ref.current)
        animation.start(duration)

        return()=>{
            animation.stop()
        }
    }, [duration])

    return (
        <h1 ref={ref} style={{
            opacity: 0,
            color: 'white',
            padding: 50,
            textAlign: 'center',
            fonSize: 50,
            backgroundImage: 'radical-gradient(circle, rgba(633,94,251,1) 0%,rgba(252,70,107,1) 100%)'
        }} >
            Welcome
            </h1>
    )
}

export default function SliderEffect(){
    const [duration, setDuration] = useState(1000)
    const [show, setShow] = useState(false)

    return(
        <>
        <label>
            <input type='range' min='100' max='300' value={duration} onChange={e=>setDuration(e.target.value)} />
            <br />
            Fade in duration: {duration} ms
        </label>
        <button onClick={()=> setShow(!show)}>
            {show? 'Remove': 'Show'}
        </button>
        <hr />
         {show && <Welcome duration={duration}/> }
        </>
        
    )
}
