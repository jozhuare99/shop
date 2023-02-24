import { useRef } from "react";

export default function Counter(){
    let ref = useRef(0)

    function handleClick(){
        ref.current = ref.current + 1
        alert('you click '+ ref.current + ' time')
    }

    return (
        <button onClick={handleClick}>
            click me
        </button>
    )
}