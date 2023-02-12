import { useState, useEffect } from 'react';

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  
  export function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
  }

  export default function Clock() {
    const [time, setTime] = useState(()=> new Date())
    useEffect(()=>{
        const id = setInterval(()=> {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(id)
    }, [])

    let hours = time.getHours();
    let className
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  