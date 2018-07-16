import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class ThirdScene extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text> textInComponent </Text>
				<Button title={'PopByNumber'} onPress={() => this.props.navigation.pop(2)} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});
