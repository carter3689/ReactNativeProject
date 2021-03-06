/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  TextInput,
  Button,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component{
  render(){
    return (
      <Text>Hello {this.props.name} ! </Text>
    )
  }
}

class LoginForm extends Component{
  render(){
    return([
      <Text>Email </Text>,
      <TextInput
      placeholder = "Email" />,
      <Text>Password </Text>,
      <TextInput
      placeholder = "Password" />,
      <Button
      title = "Sign In" />,
      <Button
      title = "Forgot Password" />,
      <Button
      title = "Sign Up" />

    ])
  }
}

//Example of STATE and PROP
class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

    //Toggle the state every second
    setInterval( () => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText};
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text: ' ';
    return (
      <Text> {display}</Text>
    );
  }
}

type Props = {};
export default class Bananas extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View>
      <Image source = {pic} style = {{width:193, height: 110}} />
      <Greeting name = "Joel" />
      <Blink text = "I chilling...blinking like a villian" />
      <LoginForm />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject2', () => Bananas)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
