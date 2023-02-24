import { useState, useContext, useReducer, createContext } from 'react';

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export default function TaskAppStateReducer(){
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask/>
            <TaskList/>
        </TasksProvider>
    )
}
//and we can also use
//const tasks = useTasks();
// const dispatch = useTasksDispatch();

function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(
      tasksReducer,
      initialTasks
    );
  
    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  }
  
  function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      case 'changed': {
        return tasks.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter(t => t.id !== 
          action.id);
      }
      default: {
        throw Error('Unknown action: ' +
                    action.type);
      }
    }
  }
  
  const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];
  
function AddTask() {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    return (
      <>
        <input
          placeholder="Add task"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          }); 
        }}>Add</button>
      </>
    );
  }
  
  let nextId = 3;
  

function TaskList() {
    const tasks = useContext(TasksContext)
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    )
}

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);
    let taskContent;
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={e => {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  text: e.target.value
                }
              });
            }} />

          <button onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: e.target.checked
              }
            });
          }}
        />
        {taskContent}
        <button onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          });
        }}>
          Delete
        </button>
      </label>
    );
  }
  