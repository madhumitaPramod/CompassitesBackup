import React, { Component } from 'react';
import { Text,StyleSheet, View,Image} from 'react-native';
import {Dice} from "../images/dice.png";


export default class TryText extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
    setInterval(() => (
      this.setState(
        { show: !this.state.show }
      )
    ), 1000);
  }
  

  render() {
    const{name} = this.props;
    if(!this.state.show){
      return null;
    }
    
    return (
      
        <Text style={styles.name}>Hello Goodmng {name}</Text>
       
      
    );
  }
}
const styles=StyleSheet.create({
name:{
  color:"#fff",
  backgroundColor:"#8C61B2",
  fontSize:20,
  fontWeight:"bold"
},
welcome:{
  color:"#fff",
  backgroundColor:"#8C61B2",
  fontSize:20,
  fontWeight:"bold"
}
})


