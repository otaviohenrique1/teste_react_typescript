import React, { useReducer } from 'react'

const initialState = { contador: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "zerar"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { contador: state.contador + action.payload };
    case "decrement":
      return { contador: state.contador - action.payload };
    case "zerar":
      return { contador: 0 };
    default:
      throw new Error();
  }
}

export default function UseReducerTeste() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>UseReducerTeste</h1>
      <h2>{state.contador}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>+</button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>-</button>
        <button onClick={() => dispatch({ type: "zerar", payload: 0  })}>0</button>
      </div>
    </div>
  )
}
