import React, { Component } from "react";
import {Text,View,StyleSheet, TextInput, TouchableHighlight, Button, ScrollView} from 'react-native';
import { connect } from  'react-redux'; 
import { editTitulo , editSenha, editValor, editBairro, editPessoas, editDesc, editAnimal, editMovelQuarto, editMovelComun, editValorConta, editObservacao } from '../actions/AuthActions'; 
import axios from "axios";


export class Cadastro extends Component {
    
    constructor(props){
        super(props)
        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.data={
            titulo:this.props.titulo,
            valor:this.props.valor,
            bairro:this.props.bairro,
            pessoas:this.props.pessoas,
            desc:this.props.desc,
            animal:this.props.animal,
            movelQuarto:this.props.movelQuarto,
            moveisComun:this.props.moveisComun,
            valorContas:this.props.valorContas,
            observacao:this.props.observacao,
        }
        console.log(this.data);

        axios.post('http://192.168.231.1:3333/main',this.data)
        .then(Response => { console.log('sucesso',this.data); })
        .catch((e) => {console.log(e); });
    }

//Na linha 23 no onchangeText ele vai receber uma entrada qualquer (um txt) e vai passar esse txt para a action que vem por props
//Da funçao connect 
    render(){
        return(
            <ScrollView style={estilo.scroll}>
                <View style={estilo.card}>
                    <View>
                    <Text style={estilo.title} >Formulario Teste</Text>

                    
                    <Text style={estilo.txt}>Titulo </Text>
                    <TextInput value={this.props.titulo} style={estilo.name} onChangeText={(txt) => this.props.editTitulo(txt)}/>
                    
                    <Text style={estilo.txt}>Valor</Text>
                    <TextInput value={this.props.valor} style={estilo.name} onChangeText={(txt) => this.props.editValor(txt)}/>
                    
                    <Text style={estilo.txt}>Bairro</Text>
                    <TextInput value={this.props.bairro} style={estilo.name} onChangeText={(txt) => this.props.editBairro(txt)}/>
                    
                    <Text style={estilo.txt}>Nº Pessoas na Casa</Text>
                    <TextInput value={this.props.pessoas} style={estilo.name} onChangeText={(txt) => this.props.editPessoas(txt)}/>
                    
                    <Text style={estilo.txt}>Descrição do Ambiente</Text>
                    <TextInput value={this.props.desc} style={estilo.name} onChangeText={(txt) => this.props.editDesc(txt)}/>
                    
                    <Text style={estilo.txt}>Aceita Animais ?</Text>
                    <TextInput value={this.props.animal} style={estilo.name} onChangeText={(txt) => this.props.editAnimal(txt)}/>
                    
                    <Text style={estilo.txt}>Moveis No Quarto</Text>
                    <TextInput value={this.props.movelQuarto} style={estilo.name} onChangeText={(txt) => this.props.editMovelQuarto(txt)}/>
                    
                    <Text style={estilo.txt}>Moveis nas areas Comun</Text>
                    <TextInput value={this.props.moveisComun} style={estilo.name} onChangeText={(txt) => this.props.editMovelComun(txt)}/>
                    
                    <Text style={estilo.txt}>Valor Aproximado das contas</Text>
                    <TextInput value={this.props.valorContas} style={estilo.name} onChangeText={(txt) => this.props.editValorConta(txt)}/>
                    
                    <Text style={estilo.txt}>Observaçoes Gerais</Text>
                    <TextInput value={this.props.observacao} style={estilo.name} onChangeText={(txt) => this.props.editObservacao(txt)}/>


                    <Button style={estilo.button} title="entrar" onPress={this.entrar} />

                    </View>   
                </View>
            </ScrollView>
                
        );
    }
}

const estilo = StyleSheet.create({
    scroll:{
        marginBottom: 10,
    },
    txt:{
        fontSize:18,
        color: '#000',
    },
    button:{
        backgroundColor: 'skyblue',
        paddingTop: 15,
        paddingBottom: 15,
    },
    txtButon:{
        textAlign: 'center',
        color: 'white'
    },
    title:{
        textAlign:'center',
        fontSize: 18,
        marginBottom: 5,
    },
    name:{
        height:40,
        borderColor:'#ccc',
        borderWidth: 1,
        borderBottomWidth:1,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0,
        marginBottom: 20,
    },
    job:{
        fontSize:15,
    },
    card:{
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
        backgroundColor: '#F5FCFF',
    },


});

//Conexao react e Redux
//Recomendação do redux, que recebe state do store e retorna um json com props que vao ser acessivel dentro do compoennte
const mapStateToProps = state => {
  return{
      //para pegar do reducer e State."NOME DO REDUCER"."NOME DA PROPIEDADE"
      titulo:state.auth.titulo,
      valor:state.auth.valor,
      bairro:state.auth.bairro,
      pessoas:state.auth.pessoas,
      desc:state.auth.desc,
      animal:state.auth.animal,
      movelQuarto:state.auth.movelQuarto,
      moveisComun:state.auth.moveisComun,
      valorContas:state.auth.valorContas,
      observacao:state.auth.observacao,
      // Ou seja agora e como se tivessemos duas props dentro do compoennte cadastro
  };
};
// passa a aonde criamos os state o conjuento de actions que vai ser utilizada e a pagina a ser renderizada
const CadastroConnect = connect(mapStateToProps, { editTitulo , editSenha, editTitulo,editValor,editBairro,editPessoas,editDesc,editAnimal,editMovelQuarto,editMovelComun,editValorConta,editObservacao }) (Cadastro);


// depois da um export default no CadastroConnect

export default CadastroConnect;