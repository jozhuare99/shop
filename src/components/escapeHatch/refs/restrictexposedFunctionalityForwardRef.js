import {forwardRef,useRef,useImperativeHandle}from 'react'

const MyInput = forwardRef((props,ref)=>{
    const realInputRef = useRef(null);
    useImperativeHandle(ref, ()=>({
        //only expose focus and nothing else
        focus(){
            realInputRef.current.focus()
        }
    }))
    return <input {...props} ref={realInputRef} />
})
export default function Form(){
    const inputRef = useRef(null)
    function handleClick(){
        inputRef.current.focus()
    }
    return(
        <>
        <MyInput ref={inputRef} />
        <button onCLick={handleClick}>
            Focus the input
        </button>
        </>
    )
}