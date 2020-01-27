import React, { Component } from 'react';
import { View, ScrollView,Image,StyleSheet, TouchableOpacity,Text} from 'react-native';
import { Content, Button,Card, CardItem, Body, Header } from 'native-base';
import { withNavigation } from 'react-navigation';
import Republica from './Republica';
import { connect } from 'react-redux';
import Cabeca from './Cabeca';
import { selecionarItem } from '../actions/AuthActions'


class DetalhesAnuncio extends Component {
    render(){
        return(
            <ScrollView>
                {console.log(this.props.selecteItem)}
                <Image source={{ uri: 'https://estudiomodulo.com.br/wp-content/uploads/2016/01/VRP_TN_mini-500x500.jpg' }} style={Detalhes.image}  />
                <Card>
                    <CardItem>
                        <Body style={Detalhes.CardCentro}>
                            <Text style={{fontSize: 18,fontWeight:"bold"}}>{this.props.selecteItem.titulo}</Text>
                            <Text> {this.props.valor} | {this.props.Titulo} Quartos | Animais : 2</Text>
                        </Body>

                    </CardItem>
                </Card>
                <View>
                    <Image source={{ uri: 'https://www.geoambiente.com.br/blog/wp-content/uploads/2017/04/googlemaps_optimized.jpg' }} style={{marginTop:100}} />
                </View>
                <Card>
                    <CardItem Header style={{justifyContent:'center'}}>
                        <Text style={Detalhes.CardCentro}>
                            {this.props.valor}
                        </Text>
                        </CardItem>
                        <CardItem>
                        <Body>
                            <Text >OQUE TEM AQUUI </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{alert('Alguma coisa ai só para testar mesmo')}}>
                        <Text>Leia mais</Text>
                     </TouchableOpacity>
                </CardItem>
                </Card>
                <View style={Detalhes.conteudo}>
                <Button rounded dark style={Detalhes.butao} onPress={() => {this.props.navigation.navigate('Home')}}>
                    <Text style={{color: "#fff"}}>
                        Candidatar a vaga
                    </Text>
                </Button>
                </View>
    
            </ScrollView>
        );
    }
    
}


const Detalhes = StyleSheet.create({
    image:{
       
        width: 420,
        height: 300,
    },
    CardCentro:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    butao:{
        color: '#fff',
        width: 300,
        height: 50,
        justifyContent: 'center',
    },
    conteudo:{
        alignItems: 'center',
        margin: 20, 
    }
  });

const mapsStateToProps = state => {
    return {
      selecteItem: state.Detalhes.dado_selecionado
    }
}

const connectDetalails = connect(mapsStateToProps, null )(DetalhesAnuncio)

export default withNavigation(connectDetalails);




