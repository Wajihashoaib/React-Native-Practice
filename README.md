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
Stack.Navigator is a component that takes route configuration as its children with additional props for configuration and renders our content.
Each Stack.Screen component takes a name prop which refers to the name of the route and component prop which specifies the component to render for the route. These are the 2 required props.
To specify what the initial route in a stack is, provide an initialRouteName as the prop for the navigator.
To specify screen-specific options, we can pass an options prop to Stack.Screen, and for common options, we can pass screenOptions to Stack.Navigator
