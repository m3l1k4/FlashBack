import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import ArrowKeys from './components/ArrowKeys'
import jsRev from './components/jQuery/jsRev';
import ducky from './components/jQuery/ducky';
// import slider from './components/jQuery/slider';


import './App.css';

import HomeMenu from './components/HomeMenu'
import GamesPage from './components/GamesPage'
import PianoPlayer from './components/PianoPlayer'
import SideBar from './components/SideBar'
import SoundCloud from './components/SoundCloud'
import Whack from './components/Whack'


import About from './components/About'
import News from './components/News'


import UploadForm from './components/UploadForm'

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

        
      <Route path="/about">
          <About />
       
        </Route>

        <Route path="/news">
          <News />
       
        </Route>


        <Route exact path="/">
          <HomeMenu />
        </Route>
        <Route path="/DDR">
          <ArrowKeys />
          <SoundCloud/>
        </Route>

        <Route path="/whack">
          <Whack />
       
        </Route>


        <Route path="/requests">
          <UploadForm />
       
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