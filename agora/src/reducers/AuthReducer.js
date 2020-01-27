const initialState = {
    titulo:'Republica lan house',
    valor:'270,00',
    bairro:'Centro',
    pessoas:'4',
    desc:'Ambiente Tranquilo',
    animal:'Nao',
    movelQuarto:'Cama,Ventilador,pscina',
    moveisComun:'Fogao,Sofa ,Geladeira',
    valorContas:'80,00R$',
    observacao:'teste'
}

const AuthReducer = (state = [], action) => {
    if( state.length == 0 ){
        return initialState;
    }
    //Recebe a acion do parametro e verifica se é a mesma
    if(action.type == 'editTitulo'){
        return {...state,titulo:action.payload.titulo};
                // . . .State pega as informaçoes do state e substitui por aquilo que esta depois da virgula
    }
    if(action.type == 'editValor'){
        return {...state, valor:action.payload.valor};
    }
    if(action.type == 'editBairro'){
        return {...state, bairro:action.payload.bairro};
    }
    if(action.type == 'editPessoas'){
        return {...state, pessoas:action.payload.pessoas};
    }
    if(action.type == 'editDesc'){
        return {...state, desc:action.payload.desc};
    }
    if(action.type == 'editAnimal'){
        return {...state, animal:action.payload.animal};
    }
    if(action.type == 'editMovelQuarto'){
        return {...state, movelQuarto:action.payload.movelQuarto};
    }
    if(action.type == 'editMovelComun'){
        return {...state, moveisComun:action.payload.moveisComun};
    }
    if(action.type == 'editValorConta'){
        return {...state, valorContas:action.payload.valorContas};
    }
    if(action.type == 'editObservacao'){
        return {...state, observacao:action.payload.observacao};
    }
    
    return state;
};

export default AuthReducer;