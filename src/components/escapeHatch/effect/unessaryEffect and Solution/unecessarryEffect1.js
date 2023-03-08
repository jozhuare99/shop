import {useState,useEffect} from 'react'
import {initialTodos, createTodo} from './todos.js'


export default function TodoList(){
    const [todos, setTodos] = useState(initialTodos)
    const [showActive, setShowActive] = useState(false)
    const [activeTodos, setActiveTodos] = useState([])
    const [visibleTodos, setVisibleTodos] = useState([])
    const [footer, setFooter] = useState(null)

    useEffect(()=>{
        setActiveTodos(todos.filter(todo=>!todo.completed))
    }, [todos])

    useEffect(()=>{
        setVisibleTodos(showActive ? activeTodos : todos)
    }, [showActive, activeTodos, todos])

    useEffect(()=>{
        setFooter(
            <footer>
                {activeTodos.length} left to do
            </footer>
        )
    },[activeTodos])

    return (
        <>
        <label>
            <input type='checkbox' checked={showActive} onChange={e=>setShowActive(e.target.checked)} />
            show only active todos
        </label>
        <NewTodo onAdd={NewTodo=> setTodos([...todos, NewTodo])} />
        <ul>
            {visibleTodos.map( todo =>(
                <li key={todo.id}>
                    {todo.completed ? <s>todo.text</s> : todo.text}
                </li>
            ))}
        </ul>
        {footer}
        </>
    )
}

function NewTodo({onAdd}){
    const [text, setText] = useState('')
    function handleAddClick(){
        setText('')
        onAdd(createTodo(text));
    }
    return (
        <>
        <input value={text} onChange={e=> setText(e.target.value)} />
        <button onClick={handleAddClick}>
            Add
        </button>
        </>
    )
}