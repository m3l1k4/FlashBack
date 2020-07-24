import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import ArrowKeys from './components/ArrowKeys'
import jsRev from './components/ArrowKeys/jsRev'
import Score from './components/Score'

import './App.css';

import HomeMenu from './components/HomeMenu'
import GamesPage from './components/GamesPage'

import PianoPlayer from './components/PianoPlayer'

import SideBar from './components/SideBar'

class App extends React.Component {




  constructor(props) {
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
<Router>

  <div className="App">
<SideBar />
     
<div className="App__inner" >
      <Switch>

        
        <Route exact path="/">
          <HomeMenu />
        </Route>
        <Route path="/DDR">
          <ArrowKeys />
        </Route>


        <Route path="/games">

        <div className="App" >
      
          <GamesPage />

          </div>
        </Route>


        <Route path="/piano">

    

            

            <div className="App__inner" >
              <PianoPlayer />
            </div>

         
        </Route>

      </Switch>
     
      </div>
      </div>
      </Router>

    );
  }
}

export default App;


export function leftTest() {
  console.log("left")
}