import React, { Component } from 'react';
import logo from './Logo UFPB.svg';
import './App.css';
import { Container, Row, Col, Button, Table, Card, CardText, CardBody, CardSubtitle} from 'reactstrap';

const dados = {
  usuario: {
    NOME: "Zezinho Cirurgião da Silva",
    CPF:  "123.456.789-00",
    EMAIL: "zezinho.cirurgia@boy.com"
  },
  avaliacao: [
    {
      id: "1",
      ano: "2016",
      tipo: "Probatoria",
      estado: "Avaliado"
    },

    {
      id: "2",
      ano: "2017",
      tipo: "Desempenho",
      estado: "Avaliado"
    },
    {
      id: "3",
      ano: "2018",
      tipo: "Desempenho",
      estado: "Em Avaliação"
    },
    {
      id: "4",
      ano: "2018",
      tipo: "Desempenho",
      estado: "Pendente"
    }
  ]
};
// var React = require('react');
// var PropTypes = require('prop-types');


export class App extends Component {
  render() {
    return (
    <div className="App">
      <Container fluid>
        <Col>
          <Row  className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Col>
              <Row>
                <h1 className="App-title Text-indent">Sistema de Avaliação de Desempenho</h1>
              </Row>
              <Row>
                <a className="Text-indent">Hospital Universitário Lauro Wanderley</a>
              </Row>
              <Row>
                <p className="Text-indent">Universidade Federal da Paraiba</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Info_pessoa usuario={dados.usuario}/>
              <Tabela avaliacao={dados.avaliacao}/>
            </Col>
          </Row>
          <Botao />
        </Col>
      </Container>
    </div>
    );
  }
}

class Info_pessoa extends Component {

  render() {
    return (
      <div>
        <Card  className="Card-position">
          <CardBody>
            <CardSubtitle>Nome: </CardSubtitle>
            <CardText>{this.props.usuario.NOME}</CardText>
            <CardSubtitle>CPF: </CardSubtitle>
            <CardText>{this.props.usuario.CPF}</CardText>
            <CardSubtitle>Email: </CardSubtitle>
            <CardText>{this.props.usuario.EMAIL}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class Tabela extends Component {
  render() {
    return (
      <Table className="Tabela-position">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Tipo da Avaliação</th>
            <th>Situação</th>
          </tr>
        </thead>
        <Linha {...dados}/>
      </Table>
    );
  }
}

class Linha extends Component {
  render() {
    return (
    <tbody>
      {dados.avaliacao.map((val) =>
        <tr key={val.id}>
          <td scope="row">{val.ano}</td>
          <td>{val.tipo}</td>
          { val.estado === "Avaliado"     && <td className="btn-success">{val.estado}</td> }
          { val.estado === "Em Avaliação" && <td className="btn-info">   {val.estado}</td> }
          { val.estado === "Pendente"     && <td className="btn-danger"> {val.estado}</td> }
        </tr>
      )}
    </tbody>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div className="btn-position">
        <Button outline>Sair</Button>
      </div>
    );
  }
}
export default App;
