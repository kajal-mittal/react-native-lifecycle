import React, { Component } from 'react'
import { Text, View ,StyleSheet,Button} from 'react-native'

export default class SecondScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Button title={'Pop'} onPress={()=>this.props.navigation.pop()}/>
        <Button title={'PopToTop'} 
        onPress={()=>this.props.navigation.popToTop()}/>
       <Button title={'Navigate'} 
       onPress={()=>this.props.navigation.navigate('ThirdScene')}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
   
  });