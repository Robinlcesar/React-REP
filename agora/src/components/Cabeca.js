import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import {TouchableOpacity, View,Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

class Cabeca extends Component{
  render(){
  return (
    <View style={Estilos.ViewCabeca}>
        <TouchableOpacity style={Estilos.touch_Icon} onPress={() => {this.props.navigation.navigate('Cadastro')}} >
            <Icon style={Estilos.icon2} name= 'menu'/>
        </TouchableOpacity>
        <View style={Estilos.Titulo}>
          <Text style={Estilos.txt}> Hommy </Text>
        </View>
        <TouchableOpacity style={{marginLeft:20,marginRight:20}} onPress={() => {this.props.navigation.navigate('Cadastro')}} >
            <Icon style={Estilos.icon2}  name="search"/>
        </TouchableOpacity>
    </View>
  );
  }
};
const Estilos = StyleSheet.create({
  ViewCabeca:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    justifyContent: "space-between",
    backgroundColor: '#2E2E2E', 
  },
  touch_Icon:{
    marginLeft:10,
    marginRight:40
  },
  Titulo:{
     marginRight: 30,
  },
  txt:{
    fontFamily: "architects-daughter-regular",
    fontSize:30,
    color: "#ffff",
    fontWeight: '800',
  },
  icon2: {
    color: "rgba(29,161,242,1)",
    fontSize: 40
  },
  

})



export default withNavigation(Cabeca);
