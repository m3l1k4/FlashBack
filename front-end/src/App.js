import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import ArrowKeys from './components/ArrowKeys'
import jsRev from './components/ArrowKeys/jsRev'


 
class App extends React.Component {
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

      <Route exact path="/">
         {/* <div {...ArrowKeysReact.events} tabIndex="1">
        {this.state.content}
      </div> */}
      <ArrowKeys/>
      </Route>
     
    );
  }
}
 
export default App;
 

export function leftTest(){
  console.log("left")
}