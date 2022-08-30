import React, { useCallback } from 'react'

export default function UseCallbackTeste() {
  const multiplier: number = 2;
  const multiply = useCallback((value: number) => value * multiplier, [multiplier]);

  return (
    <div>
      <h1>UseCallbackTeste</h1>
      <h2>{multiply.toString()}</h2>
    </div>
  )
}
