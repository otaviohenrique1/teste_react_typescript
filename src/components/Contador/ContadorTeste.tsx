import { FC } from 'react';
import ContadorArrowFunction from './ContadorArrowFuncao';
import ContadorClass from './ContadorClasse';
import ContadorFunction from './ContadorFuncao';

const ContadorTeste: FC = () => {
  return (
    <div>
      <ContadorClass valor_inicial={1} />
      <hr />
      <ContadorFunction valor_inicial={1} />
      <hr />
      <ContadorArrowFunction valor_inicial={1} />
      <hr />
    </div>
  );
}

export default ContadorTeste;