/** @format */

/** @format */
import React, {PureComponent} from 'react';
import {AppRegistry,View} from 'react-native';
import FirstScene from './FirstScene';
import {name as appName} from './app.json';
import { StackNavigator } from 'react-navigation';
import SecondScene from './SecondScene';
import ThirdScene from './ThirdScene';
const AppFlow = StackNavigator({
	FirstScene: { screen: FirstScene},
    SecondScene: { screen: SecondScene },
    ThirdScene: { screen:ThirdScene }
});
export default class App extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppFlow/>
			</View>
		);
	}
}



AppRegistry.registerComponent(appName, () => App);
