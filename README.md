# react-navigation-demo
```
git clone https://github.com/kajal-mittal/react-navigation-demo.git
cd react-navigation-demo
npm install

react-native run-ios
react-native run-android
```
## Navigation Actions (React Native)

1. pop
2. popToTop
3. willFocus
4. popByNumber
5. navigateOnce
 
### willFocus
##### FirstScene.js
```
componentDidMount = () => {
		this._willFocus = this.props.navigation.addListener('willFocus', () => this.setState({ showText: true }));
	};
```

### navigateOnce 
##### index.js

```
// Prevents double taps navigating twice
const navigateOnce = getStateForAction => (action, state) => {
	const { type, routeName } = action;
	return state && type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName
		? state
		: getStateForAction(action, state);
};
AppFlow.router.getStateForAction = navigateOnce(AppFlow.router.getStateForAction);

```
