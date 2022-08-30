import React, { useLayoutEffect, useState } from 'react'

export default function UseLayoutEffectTeste() {
  const [data, setData] = useState<number[]>([]);

  useLayoutEffect(() => {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    setData(lista)
  }, [])


  return (
    <div>
      <h1>UseLayoutEffectTeste</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
