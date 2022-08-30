/*
  # Higher-Order Component => Componente de Ordem Superior
  ## Um componente de ordem superior é uma função que recebe um componente e retorna um novo componente.
*/

export default function HigherOrderComponentTeste1() {
  return (
    <div>
      <h1>HigherOrderComponentTeste</h1>
      {TesteHOC1(10)}
    </div>
  );
}

function TesteHOC1(valor: number) {
  return (
    <div>{valor}</div>
  );
}
