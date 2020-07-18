import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Use arrow keys on your keyboard!'
    };
    ArrowKeysReact.config({
      left: () => {
        // this.setState({
        //   content: 'left key detected.'
        // });
        leftTest();
      },
      right: () => {
        this.setState({
          content: 'right key detected.'
        });
      },
      up: () => {
        this.setState({
          content: 'up key detected.'
        });
      },
      down: () => {
        this.setState({
          content: 'down key detected.'
        });
      }
    });
  }


  
  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="1">
        {this.state.content}
      </div>
    );
  }
}
 
export default App;
 

export function leftTest(){
  console.log("left")
}