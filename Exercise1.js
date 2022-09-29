import React from 'react';
import {View , Text} from 'react-native';

const App = () => {
  return(
    <View style={{
      width: 100 ,
      height: 100,
      marginTop: 55,
      backgroundColor: 'skyblue',
      alignitems:'center',
      justifyContent: 'center'
    }}>
    <Text style={{
      color: '#fff',
      textAlign: 'center'
    }}>
      Hello,World!
    </Text>
    </View>
  );
}
export default App;
