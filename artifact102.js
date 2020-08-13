import React from 'react' ;
import {View,Text} from 'react-native';
function App(){
  return(
    <View style={{
      flexDirection:"row",
      height:100,
      padding:20
    }}>
      <view style={{background:"blue",flex:0.3}}/>
      <view style={{background:"red",flex:0.5}}/>
      <text>i love my cat </text>
    </View>
  )
}
export default App;