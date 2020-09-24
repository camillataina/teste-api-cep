import React, { Component } from "react";
import ReactDom from "react-dom";
import api from "../../services/api";

export default class Cep extends Component {
  state = {
    cep: "",
    dadosCep: {}
  };

  pegarCepDigitado = (event) => {
    let valorCep = event.target.value;
    this.setState({ cep: valorCep });
  };

  buscarCepDigitado = (event) => {
    this.buscarCepUsandoApi();
  };

  async buscarCepUsandoApi() {
    let { cep } = this.state;
    let response = await api.get(`${cep}/json`);
    this.setState({ cep, dadosCep: response.data });
  }

  render() {
    let { dadosCep } = this.state;
    return (
      <div>
        <input type="text" onChange={this.pegarCepDigitado} />
        <button onClick={this.buscarCepDigitado}>Buscar Cep</button>
        <br />
        <br />
        <div>
          <h2>Dados Cep</h2>
          <br />
          <p>Cep: {dadosCep.cep}</p>
          <p>Logradouro: {dadosCep.logradouro}</p>
          <p>Bairro: {dadosCep.bairro}</p>
          <p>Localidade: {dadosCep.localidade}</p>
        </div>
      </div>
    );
  }
}
