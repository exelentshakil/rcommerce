import React, {useContext, useEffect} from 'react';

import './App.scss';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//  contexts

import { ProductsContext } from './contexts/ProductsProvider';

const App = () => {

  const [products, dispatch, fetchProducts] = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="App">

      <Router>
        <div className="nav">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

      <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />

      </Switch>
      </Router>

  </div>
  );
}

export default App;
