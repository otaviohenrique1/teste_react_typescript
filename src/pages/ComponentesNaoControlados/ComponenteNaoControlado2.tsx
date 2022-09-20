import React, { createRef, FormEvent } from 'react'

export default function ComponenteNaoControlado2() {
  const inputNome = createRef<HTMLInputElement>();
  const inputEmail = createRef<HTMLInputElement>();
  const inputSenha = createRef<HTMLInputElement>();
  const inputUsuario = createRef<HTMLInputElement>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`
      Nome: ${inputNome.current?.value}
      Email: ${inputEmail.current?.value}
      Senha: ${inputSenha.current?.value}
      Usuario: ${inputUsuario.current?.value}
    `);
  }

  return (
    <div>
      <h1>ComponenteNaoControlado2</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span style={{ marginRight: "5px" }}>Nome:</span>
          <input type="text" ref={inputNome} />
        </label>
        <label>
          <span style={{ marginRight: "5px" }}>Email:</span>
          <input type="text" ref={inputEmail} />
        </label>
        <label>
          <span style={{ marginRight: "5px" }}>Senha:</span>
          <input type="text" ref={inputSenha} />
        </label>
        <label>
          <span style={{ marginRight: "5px" }}>Usuario:</span>
          <input type="text" ref={inputUsuario} />
        </label>
        <button type="submit">Salvar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  )
}
