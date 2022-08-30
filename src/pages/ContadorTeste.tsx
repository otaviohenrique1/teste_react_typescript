import { FC } from 'react';
import ContadorArrowFunction from '../components/ContadorArrowFuncao';
import ContadorClass from '../components/ContadorClasse';
import ContadorFunction from '../components/ContadorFuncao';

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