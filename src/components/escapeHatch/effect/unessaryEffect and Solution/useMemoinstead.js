import {useState, useEffect, useMemo } from 'react'
import {initialTodos,createTodo,getVisibleTodos} from './customHook'

export default function TodoList(){
    const [todos, setTodos] = useState(initialTodos)
    const [showActive, setShowActive] = useState(false)
    const [text,setText] =useState('')
    //problem
    const [visibleTodos, setVisibleTodos] = useState([])

    useEffect(()=>{
        setVisibleTodos(getVisibleTodos(todos, showActive))
    }, [todos, showActive])

    //end of Problem

    //solution 1
    const visibleTodos1 = useMemo(
        ()=>{
            return getVisibleTodos(todos, showActive)
        }, [todos, showActive]
    )

    // end of Solution 1
    function handleClick(){
        setText('')
        setTodos([...todos, createTodo(text)])
    }

    return(
        <>
        <label>
            <input type='checkbox' checked={showActive} onChange={e=>setShowActive(e.target.checked)} />
            show only active todos
        </label>
        <input value={text} onChange={e=>setText(e.target.value)} />
        <button onClick={handleClick}>Add</button>

        {/* Solution 2 Apply */}
        <NewTodo onAdd={NewTodo => setTodos([...todos, NewTodo])}/>
        {/* Solution 2 Applied */}

        <ul>
            {visibleTodos.map(todo=>(
                <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
            ))}
        </ul>
        </>
    )
}


//solution 2 is to use new Component
function NewTodo({onAdd}){
    const [text, setText] = useState('')
    function handleClick(){
        setText('')
        onAdd(createTodo(text))
    }
    return (
        <>
        <input value={text} onChange={e=>setText(e.target.value)} />
        <button onClick={handleClick}>
            Add Task
        </button>
        </>
    )
}
//end solution 2