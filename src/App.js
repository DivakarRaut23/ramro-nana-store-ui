import './App.css';

import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';
import AboutUs from './pages/about-us/AboutUs';
import Product from './pages/product/Product';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home  />
        </Route>
        <Route exact path="/about-us">
            <AboutUs />
        </Route>
        <Route exact path="/product">
            <Product />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
      </Switch>
        
        
    </Router>
    </>
  );
}

export default App;
