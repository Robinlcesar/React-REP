import React, {Component} from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import Cartao from './Cartao.js';
import { Button, View } from 'native-base';
import { lerCard } from '../actions/AuthActions';
import { connect } from 'react-redux';

class Republica extends Component {
  
  constructor(props){
    super(props);
    this.state = { listaRepublicas : [] };
  }

  UNSAFE_componentWillMount (){
    return axios.get('http://192.168.231.1:3333/main')
      .then((responseJson) => {this.setState({listaRepublicas: responseJson.data }); })
      .catch((error) =>{
        console.error('COM ERRO',error);
      });
    }
  
  render(){
  return (

    <ScrollView style={estilosRepublica.card}>   
        <FlatList 
          data={this.state.listaRepublicas}
          keyExtractor={(item, index) => item.key}
          renderItem={({item}) => <Cartao leonardo={item} ></Cartao>}
        />
    </ScrollView>   
    );
  }
};


const estilosRepublica = StyleSheet.create({
    card:{
        marginTop:0,
    },
});



export default Republica;
