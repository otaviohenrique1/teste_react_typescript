import React, { createRef, FormEvent } from 'react'

export default function ComponenteNaoControlado1() {
  const input = createRef<HTMLInputElement>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(input.current?.value);
  }

  return (
    <div>
      <h1>ComponenteNaoControlado1</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span style={{ marginRight: "5px" }}>Nome:</span>
          <input type="text" ref={input} />
        </label>
        <button type="submit">Salvar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}
