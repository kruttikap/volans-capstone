import React from 'react';
import './App.css';
import SignInSide from './Containers/Login2B';
import ProductsDisplay from './Components/ProductsDisp'
import Notfound from './Components/NotFound'
import LoggedIn from './Containers/LoggedIn';
import SignUp from './Containers/SignUp';
import ProductDescription from './Containers/ProductDesc2B';
import Checkout from './Containers/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch
} from "react-router-dom";



import Button from '@material-ui/core/Button';
import Home2B from './Containers/Home2B';


function App() {
  return (
    <div className="App">
     <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Home2B} />
      <Route exact path="/login" component={SignInSide} />
      <Route exact path="/prdisp" component={ProductsDisplay} />
      <Route exact path="/loggedin" component={LoggedIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/prdesc" component={ProductDescription} />
      <Route exact path="/checkout" component={Checkout} />
      <Route component={Notfound} />
      </Switch>
    </div>


    </Router>
    </div>

  );
}

export default App;
