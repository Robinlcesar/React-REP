import React,{Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import PageAnuncio from './pages/PageAnuncio';
import Principal from './pages/Main';
import Cadastro from './pages/Cadastro';


const Navegacao = createStackNavigator(
  
  {
    Cadastro : Cadastro,
    Home: Principal,
    Detalhes: PageAnuncio,
  },
  {
    initialRouteName: 'Home',
  }
  
);


Principal.navigationOptions = {
    header:null,
}
PageAnuncio.navigationOptions = {
  header: null,
}
Cadastro.navigationOptions = {
  header: null,
}



export default createAppContainer(Navegacao);