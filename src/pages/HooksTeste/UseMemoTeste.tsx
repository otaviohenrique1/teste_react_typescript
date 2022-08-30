import React, { useMemo } from 'react'

export default function UseMemoTeste() {
  const value: number = 10;
  const result = useMemo(() => value * 2, [value]);

  return (
    <div>
      <h1>UseMemoTeste</h1>
      <h2>{result}</h2>
    </div>
  )
}
