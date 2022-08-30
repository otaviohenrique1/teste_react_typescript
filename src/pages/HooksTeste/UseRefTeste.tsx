import React, { createRef, useRef } from 'react'

export default function UseRefTeste() {
  const refSpan1 = createRef<HTMLSpanElement>();
  const refSpan2 = useRef<HTMLSpanElement>(null);
  
  return (
    <div>
      <span ref={refSpan1}></span>
      <span ref={refSpan2}></span>
    </div>
  )
}
