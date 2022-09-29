
import React from 'react'
import {View , Text} from 'react-native';

export default class App extends React.Component{
  state = {
  mystate: 'This is State of App'
  }
updateState = ()=> {this.setState({mystate: 'Updated'})}
 render(){
 return(
  <View> 
   <Text onPress = {this.updateState}>{this.state.mystate}</Text>
  </View>
 );
}
