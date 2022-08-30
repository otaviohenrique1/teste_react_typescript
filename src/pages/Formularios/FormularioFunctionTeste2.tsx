import React, { FormEvent, useState } from 'react';

function FormularioFunctionTeste1() {
  const [value, setValue] = useState<string>('Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.');

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(value);
  }

  return (
    <div>
      <h1>FormularioFunctionTeste1</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Salvar</button>
        <button type="reset">Limpar</button>
      </form>
    </div>
  );
}

export default FormularioFunctionTeste1;