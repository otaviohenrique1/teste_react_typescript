import { Component } from 'react';

type ContadorClassProps = { 
  valor_inicial: number
}

type ContadorClassState = { 
  contador: number;
}

export default class ContadorClass extends Component<ContadorClassProps, ContadorClassState> {
  constructor(props: ContadorClassProps) {
    super(props);

    this.adicionar = this.adicionar.bind(this);
    this.subtrair = this.subtrair.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  state: ContadorClassState = {
    contador: 0
  }
  
  adicionar() {
    this.setState((state) => ({
      contador: state.contador + this.props.valor_inicial,
    }))
  }

  subtrair() {
    this.setState((state) => ({
      contador: state.contador - this.props.valor_inicial,
    }))
  }

  zerar() {
    this.setState((state) => ({
      contador: 0,
    }))
  }

  render() {
    return (
      <div>
        <h1>Contador Class</h1>
        <h2>{`Valor inicial: ${this.props.valor_inicial}`}</h2>
        <h2>{this.state.contador}</h2>
        <button onClick={this.adicionar}>+</button>
        <button onClick={this.subtrair}>-</button>
        <button onClick={this.zerar}>0</button>
      </div>
    );
  }
}
