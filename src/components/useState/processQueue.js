export function getFinalState(baseState, queue){
    let finalState = baseState
    for(let q of queue){
        if(typeof q ==='function'){
           finalState = q(finalState)
        } else {  finalState = q }
    }
    return finalState
}