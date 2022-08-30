import React, { createRef, useRef } from 'react'

export default function UseRefTeste() {
  const refSpan1 = createRef<HTMLSpanElement>();
  const refSpan2 = useRef<HTMLSpanElement>(null);
  const valor1 = refSpan1.current?.innerText;
  const valor2 = refSpan2.current?.innerText;

  return (
    <div>
      <h1>UseRefTeste</h1>
      <span ref={refSpan1}>Span1</span>
      <span ref={refSpan2}>Span2</span>
      <span>{valor1}</span>
      <span>{valor2}</span>
    </div>
  )
}
