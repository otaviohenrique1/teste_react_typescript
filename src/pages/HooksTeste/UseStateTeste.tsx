import React, { useState } from 'react'

export default function UseStateTeste() {
  const [contador, setContador] = useState<number>(0);
  
  return (
    <div>
      <h1>UseStateTeste</h1>
      <h2>{contador}</h2>
      <div>
        <button onClick={() => setContador(contador + 1)}>+</button>
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(0)}>0</button>
      </div>
    </div>
  )
}
