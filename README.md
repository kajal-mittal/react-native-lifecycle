# react-navigation-demo
```
git clone https://github.com/kajal-mittal/react-navigation-demo.git
cd react-navigation-demo
npm install

react-native run-ios
react-native run-android
```
## Navigation Actions (React Native)

1. pop:- go back in the stack
2. popToTop:- go To Top of the stack
3. willFocus:- the screen will focus.(User to change state of component whenever screen will be focused. Donot forget to remove listeners.)
4. popByNumber:- 
5. navigateOnce:- prevent to navigate multiple times.
 
### willFocus
##### FirstScene.js
```
componentDidMount = () => {
		this._willFocus = this.props.navigation.addListener('willFocus', () => this.setState({ showText: true }));
	};
```
```
componentWillUnmount() {
		this._willFocus.remove();
	}
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
