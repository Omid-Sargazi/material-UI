import React,{useReducer} from 'react'

const initialState = 0;

const reducer = (state: number,action: any) => {
    switch (action) {
        case 'increment':
            return state+1;
        case 'decrement': 
            return state-1;
        case'reset':
            return initialState;
        default:
            throw new Error();
    }
}


export default function UseReducer() {
    const [count, dispatch]=useReducer(reducer, initialState);

    console.log("UseReducer render")
    const handleReset = () => {
        if (count !== 0) {
          dispatch('reset');
        }
      };

    return (
        <>
        <div>UseReducer</div>
        <div>{count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        {/* <button onClick={()=>dispatch('reset')}>Reset</button> */}
        <button onClick={handleReset}>Reset</button>
        </>
      )
}




