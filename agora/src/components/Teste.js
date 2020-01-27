import React, {Component} from 'react';
import {Text, Image, Button } from 'react-native';
import login from './Tela_login.js';
import { View } from 'native-base';



class Cadastro extends Component{
    render(){
        return(
           <View>
               <Button title="Titulo Do Botão" />
               <Text> Hello Word ! </Text>
           </View>
        );   
    }
};

export default Cadastro;