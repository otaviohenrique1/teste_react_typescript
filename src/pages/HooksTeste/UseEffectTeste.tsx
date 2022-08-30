import React, { useEffect, useState } from 'react'

export default function UseEffectTeste() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    setData(lista)
  }, [])


  return (
    <div>
      <h1>UseEffectTeste</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
