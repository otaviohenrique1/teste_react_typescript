import { useState } from 'react';

type ContadorFunctionProps = {
  valor_inicial: number
}

export default function ContadorFunction(props: ContadorFunctionProps) {
  const [contador, setContador] = useState<number>(0);

  function adicionar() {
    setContador(contador + props.valor_inicial);
  }

  function subtrair() {
    setContador(contador - props.valor_inicial);
  }

  function zerar() {
    setContador(0);
  }

  return (
    <div>
      <h1>Contador Function</h1>
      <h2>{`Valor inicial: ${props.valor_inicial}`}</h2>
      <h2>{contador}</h2>
      <button onClick={adicionar}>+</button>
      <button onClick={subtrair}>-</button>
      <button onClick={zerar}>0</button>
    </div>
  );
}
