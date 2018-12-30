import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


/* NOTES
-classes are called components
-the class uses the render function tp render things
-in the render function you can use JS, but not in the return part
-you can use JS in the return part if it's in curly braces {}
-props are like the attributes of a class, when you use the class you give 
the attribute a value  
-props are fixed for the life of the component 
-states can be used to update the component*/
class Greeting extends React.Component {
  render(){
    return(
      <Text> What's up there, {this.props.name}, you are {this.props.Age} </Text>
    );
  }
}

/* class Blink extends React.Component {
  constructor(props){
    super(props);
    this.state = {isShowingText: true};
  }
  setInterval(() => {
    this.setState(previousState => {
      return { isShowingText: !previousState.isShowingText };
    });
  }, 1000);

  render(){
    let display = this.state.isShowingText ? this.props.text = ' ';
    return(
      <Text>{display}</Text>
    );
  }
} */

export default class App extends React.Component {
  render() {
    var age = 20;
    let myPhoto =  {uri:'https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg'};
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>I am {age} years old</Text>
        <Text>Shake your phone to open the developer menu ;).</Text>
        <Image source = {myPhoto} style ={styles.imageSize}/>
        <Greeting name = 'Minion' Age={20} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a100ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageSize: {
    height: 100,
    width: 100,
  }
});
