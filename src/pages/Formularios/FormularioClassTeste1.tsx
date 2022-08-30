import React, { Component, FormEvent } from 'react';

type FormularioClassTeste1Props = { 
  // 
}

type FormularioClassTeste1State = { 
  value: string;
}

class FormularioClassTeste1 extends Component<FormularioClassTeste1Props, FormularioClassTeste1State> {
  constructor(props: FormularioClassTeste1Props) {
    super(props);
    this.state = {
      value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: FormEvent<HTMLInputElement>) {
    this.setState({value: event.currentTarget.value});
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(this.state.value);
  }
  
  render() {
    return (
      <div>
        <h1>FormularioClassTeste1</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Salvar</button>
          <button type="reset">Limpar</button>
        </form>
      </div>
    );
  }
}

export default FormularioClassTeste1;