/** @format */

/** @format */
import React, { PureComponent } from 'react';
import { AppRegistry, View } from 'react-native';
import FirstScene from './src/components/FirstScene';
import { name as appName } from './app.json';
import { StackNavigator, NavigationActions } from 'react-navigation';
import SecondScene from './src/components/SecondScene';
import ThirdScene from './src/components/ThirdScene';
const AppFlow = StackNavigator({
	FirstScene: { screen: FirstScene },
	SecondScene: { screen: SecondScene },
	ThirdScene: { screen: ThirdScene }
});
// Prevents double taps navigating twice
const navigateOnce = getStateForAction => (action, state) => {
	const { type, routeName } = action;
	return state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName
		? state
		: getStateForAction(action, state);
};
AppFlow.router.getStateForAction = navigateOnce(AppFlow.router.getStateForAction);
export default class App extends PureComponent {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<AppFlow />
			</View>
		);
	}
}

AppRegistry.registerComponent(appName, () => App);
