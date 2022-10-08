import React, { Component } from 'react';
import logo from '../assets/logo_dynamox.png';
import fundo from '../assets/grafismo.png';
import pc from '../assets/desktop_and_mobile.png';
import logoFundo from '../assets/logo-dynapredict.png';
import tca from '../assets/sensor-tca.png'
import as from '../assets/sensor-af.png'
import hf from '../assets/sensor-hf.png'

import './App.css';


class App extends Component {

  /*Receber os dados do formulario*/ 

  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Dados de ' + this.state.value + ' salvo com sucesso.');
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <a href="https://dynamox.net/"> <img src={logo} className="logo"/></a>
          <div className='ajusteLink'>
            <a href="https://dynamox.net/dynapredict/" className="link">DynaPredict</a>
            <a href="#Sensores" className="link">Sensores</a>
            <a href="#Contatos" className="link">Contato</a>
          </div>
          
          
        </div>
        <div className="imagem_header">
          <img src={fundo} className="fundo"/>
          <div className="texto_logo">
            <p> Solução <br></br>Dynapredict</p>
            <img src={logoFundo} className="ajusteLogo"/>
          </div>
          <img src={pc} className="img_pc"/>
        </div>
        <br/>
        <br/>
        <div className='Sensores' id='Sensores'>
          <br/>
          <h2 className='titulo'><b>Sensores para Manutenção Preditiva</b></h2>
          <p className='texto_sensores'>Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e <br/>
              temperatura embarcados, que comunicam por Bluetooth com o App mobile ou Gateway,<br/>
              registrando os dados monitorados em sua memória interna. Por conexão internet esses dados <br/>
              são centralizados na Plataforma DynaPredict Web para análise, prognóstico e tomada de decisão.<br/>
          </p>

          <br/>
            <div className='botao_ver_mais'>
              <a href="https://dynamox.net/dynapredict/" className='btn'> VER MAIS </a>
            </div>
          <br/>

          <div className='container'>
            <div>
              <img src={tca} className="dados"/>
              <p><b>TcA+</b></p>
            </div>
            <div>
              <img src={as} className="dados"/>
              <p><b>AS</b></p>
            </div>
            <div>
              <img src={hf} className="dados"/>
              <p><b>HF</b></p>
            </div>
          </div>
        </div>
        <div className='footer' id="Contatos">
          <br/>
          <h2>Ficou com dúvidas?<br/>Nós entramos em contato com você</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="nome" placeholder='Como gostaria de ser chamado?'className='form' value={this.state.value} onChange={this.handleChange}/><br/>
            <input type="text" name="empresa" placeholder='Em qual empresa você trabalha?' className='form'/><br/>
            <input type="text" name="email" placeholder='Digite aqui o seu email' className='form'/><br/>
            <input type="text" name="telefone" placeholder='Qual o seu telefone?' className='form'/><br/>
            <br/>
            <input type="submit" value="ENVIAR" className='botao_enviar'/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
