import React, {Component} from 'react';
import { Image, Text, TouchableHighlight,StyleSheet} from 'react-native';
import { Card, CardItem, Left, Body, Right, Button, Item, View } from 'native-base';
import Hr from "react-native-hr-component";
import {withNavigation} from 'react-navigation';
import { selecionarItem } from '../actions/DetalhesActions';
import { connect } from 'react-redux';


class  Cartao extends Component { 
  constructor(props) {
    super(props)
    this.onClickCard = this.onClickCard.bind(this)
  }
  
  onClickCard = () => {
    
    const dados  = this.props.leonardo
    console.log(dados);
    this.props.selecionarItem(dados)
    this.props.navigation.navigate('Detalhes')
  }

  render(){
    return (
      <TouchableHighlight onPress={this.onClickCard} style={{width:350,height:134,justifyContent: "center",marginTop:3}}>
        <Card transparent >
            <CardItem cardBody >
                <Left>
                    <Image source={{ uri: 'https://cdn.shopify.com/s/files/1/2002/4241/files/stars_6c3eac98-b902-4653-8cf2-e70eac98ccda_400x@2x.png?v=1499052600' }} style={{height: 120, width: 120}} />
                </Left>
                <Body>
                    <Text style={Estilo.titulo}>{this.props.leonardo.titulo}</Text>
                    <Text note style={Estilo.descricao}>{this.props.leonardo.desc}</Text>
                </Body>
                <Right>
                    <Text style={Estilo.nota}> {this.props.leonardo.valor} </Text>
                    <Image source={{ uri:'https://cdn.shopify.com/s/files/1/2002/4241/files/stars_6c3eac98-b902-4653-8cf2-e70eac98ccda_400x@2x.png?v=1499052600' }} style={{height: 10, width: 60}} />
                </Right>
            </CardItem>
           <Hr lineColor="#eee" width={1} text="" hrStyles={{marginBottom:10}} />
          </Card>
          
    </TouchableHighlight>
  );
  }  
};

const Estilo = StyleSheet.create({
  titulo:{
    
    color: "rgba(29,29,29,1)",
    fontSize: 24,
    fontFamily: "aldrich-regular"
  },
  descricao:{
    marginTop: 30,
    width: 140,
    height: 50,
    color: "rgba(29,29,29,1)",
    fontSize: 12,
    fontFamily: "aldrich-regular"
  },
  nota:{
    marginRight: 18,
    color: "rgba(29,29,29,1)",
    fontSize: 15,
    fontFamily: "aldrich-regular"
  },
});


const cardConnect = connect(null, { selecionarItem })(Cartao)

export default withNavigation(cardConnect);