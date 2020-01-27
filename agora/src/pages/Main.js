import React from 'react';
import { View, StyleSheet} from 'react-native';

import Cabeca from '../components/Cabeca';
import Republica from '../components/Republica';
import { Button } from 'native-base';

const Principal =({ navigation })=>{
            return (
                <View>
                    <Cabeca />
                    <Republica style={estilosRepublica.card} navigation  />{/*ESPAÇO PARA NAO SOBREPOR A HEADER*/}
                </View>
            );
}


const estilosRepublica = StyleSheet.create({
  card:{
      marginTop:55,
  },
});

export default  Principal;