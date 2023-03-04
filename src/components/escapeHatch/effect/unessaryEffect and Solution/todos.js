let nextId  = 0

export function createTodo(text ,completed =false){
    return{
        id: nextId++,
        text,
        completed
    }
}

export const initialTodos =  [
    createTodo('Get Apples', true),
    createTodo('Get Oranges', true),
    createTodo('Get Carrots')
]