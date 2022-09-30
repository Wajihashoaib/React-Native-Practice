# React-Native-Practice
# Exercise 01
Render a square and inside square write Hello world
# Exercise 2
Capturing a tap using Button Component and alert ,'Hello world'
# Exercise 3
Rather than Button Componenet use 'TouchableOpacity' and 'Text' Component.
# Exercise 4
Custom Button
# Exercise 5
Custom Button Extra Styling
# Stats and Props
Props are immutable but state is mutable.Props are normally passed from parent component to its child component. But, state is maintained in each component.
Using props, we can change the state of a parent component
# Navigation 

<b>createNativeStackNavigator</b> is a function that returns an object containing 2 properties: Screen and Navigator.</br></br>
<b>NavigationContainer</b> is a component which manages our navigation tree and contains the navigation state.</br></br>
<b>Stack.Navigator</b> is a component that takes route configuration as its children with additional props for configuration and renders our content.</br></br>
Each <b>Stack.Screen component takes a name prop which refers to the name of the route and component prop which specifies the component to render for the route. These are the 2 required</b> props.</br></br>
To specify what the initial route in a stack is, provide an <b>initialRouteName</b> as the prop for the navigator.</br></br>
To specify screen-specific options, we can pass an <b>options</b> prop to Stack.Screen, and for common options, we can pass screenOptions to Stack.Navigator
