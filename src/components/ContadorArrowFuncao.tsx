import { FC, useState } from "react";

type ContadorArrowFunctionProps = { 
  valor_inicial: number
}

const ContadorArrowFunction: FC<ContadorArrowFunctionProps> = (props: ContadorArrowFunctionProps) => {
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
      <h1>Contador Arrow Function</h1>
      <h2>{`Valor inicial: ${props.valor_inicial}`}</h2>
      <h2>{contador}</h2>
      <button onClick={adicionar}>+</button>
      <button onClick={subtrair}>-</button>
      <button onClick={zerar}>0</button>
    </div>
  );
}

export default ContadorArrowFunction;