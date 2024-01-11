// useReducer is an additional Hook for managing more complex state logic.

import React, { useReducer } from 'react'

function counterreducer(state,action){
 switch (action.type) {                     // previous state taking action and giving next one
    case "Increment":
        return{count:state.count +1};
    case "Decrement":
        return{count:state.count-1};
    case "Reset":
            return{count:0};
    default:
        throw Error("Invalid action");
 }
}

function Counter() {
    const [state,dispatch] = useReducer(counterreducer,{count:0});
    
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type:"Increment"})}>Increment</button> 
        <button onClick={()=> dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=> dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default Counter;

// current state which last returns that send to the action which available  in the above

