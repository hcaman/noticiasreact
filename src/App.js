import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias:[]
  };

  componentDidMount() {
    this.consultarNoticias();
    
  }
  consultarNoticias = async (categoria='general') => {
    const url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a755227ebdd748aa956b539abc7c1634`;
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json(url);
    this.setState({
      noticias: noticias.articles
    });
  }
  

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
