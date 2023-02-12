import {useState, useEffect} from 'react'

function Time({color, time}){
    return (
        <h1 style={{color: color}}>
            {time}
        </h1>
    )
}
export function useTime() {
    const [time, setTime] = useState(()=> new Date())
    useEffect(()=>{
        const id = setInterval(()=> {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(id)
    }, []);
    return time
}

export default function Clock(){
    const time = useTime()
    const [color, setColor] = useState('lightcoral')
    return (
        <div>
            <p>pick a color:{' '}
            <select value={color} onChange={e => setColor(e.target.value)}>
                <option value='lightcoral'>Lightcoral</option>
                <option value='midnightblue'>Midnight blue</option>
                <option value='rebeccapurple'>Rebecca Purple</option>
            </select>
            </p>
         <Time color={color} time={time.toLocaleTimeString()} />
        </div>
    )
}


