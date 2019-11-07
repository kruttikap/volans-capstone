import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Home2B from './Containers/Home2B';
import ProductDesc2B from './Containers/ProductDesc2B';
import Login2B from './Containers/Login2B';
import Cart2C from './Containers/Cart2C';
import Categories2C from './Containers/Categories2C';
import Search from './Components/Search'
function App() {
  return (
    <div className="App">
       {/* <Button variant="contained" color="primary">
      Hello World
    </Button> */}
    <Home2B />
    {/* <ProductDesc2B /> */}
    {/* <Login2B /> */}
    {/* <Cart2C /> */}
    {/* <Categories2C /> */}
    {/* <Search/> */}
    </div>
  );
}

export default App;
