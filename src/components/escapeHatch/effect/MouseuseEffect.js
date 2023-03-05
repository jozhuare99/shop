import {useState, useEffect} from 'react'

export default function App(){
    const [position, setPosition] = useState({x: 0, y:0})
    const [canMove, setCanMove] = useState(false)

    useEffect(()=>{
        function handleMove(e){
            if(canMove){
                setPosition({x: e.clientX, y: e.clientY})
            }
        }
        window.addEventListener('pointermove', handleMove)
        return () => window.removeEventListener('pointermove', handleMove)
    }, [canMove])

    return (
        <>
            <label>
                <input type='checkbox' checked={canMove} onChange={e=>setCanMove(e.target.checked)} />
                The dot is allowed to move
            </label>
            <hr />
<div style={{
    position: 'absolute',
    backgroundColor: 'darkblue',
    borderRadius: '50%',
    opacity: 1,
    transform: `translate(${position.x}px, ${position.y}px)`,
    pointerEvents: 'none',
    left: -20,
    top: -20,
    width: 20,
    height: 20
}} />
        </>
    )
}
