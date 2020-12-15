import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout';
import { useLiff } from 'react-liff';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
  


  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path='/checkout'>   
            <Checkout/>
          </Route>
          <Route path='/'>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
