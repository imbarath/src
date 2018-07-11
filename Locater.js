import React, { Component } from 'react';
import './App.css';

class Locater extends Component {

constructor(){
  
  super();

  this.state = {text:"Initial text"};

   }

  clicked(text){
  this.setState({text:text});
}
  render() {

    return (
      <div>
        {this.state.text}
         <input ref="textBox" type="text"/>
        
      </div>
      )
  }
  }
  




export {Locater as default };

  

