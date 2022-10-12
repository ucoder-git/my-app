import React, { useReducer, dispatch } from 'react'

export default function Reducer() {
    const initialState ={count: 0};

    function reducer(state, action){
      switch(action.type) {
        case 'reset':
          return initialState;
        case 'increment':
          return {count: state.count +1};
        case 'decrement':
            return {count: state.count -1};
        default:
            throw new Error();
      }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count(Reducer): {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'descrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}
