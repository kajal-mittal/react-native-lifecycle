/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class FirstScene extends PureComponent<Props> {
  constructor(props){
    super(props);
    this.state={showText:true}
  }
  componentDidMount = () => {
    this._willFocus = this.props.navigation.addListener('willFocus', () =>
        this.setState({ showText: true })
    );
  }
  componentWillUnmount() {
    this._willFocus.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        {this.state.showText &&(
          <View>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        </View>)}
        <Button title={'Navigate'} 
           onPress={()=>{this.setState({showText:false});
          this.props.navigation.navigate('SecondScene')}}/>
          
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
