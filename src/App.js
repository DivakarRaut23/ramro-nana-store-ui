import './App.css';

import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';
import AboutUs from './pages/about-us/AboutUs';
import Product from './pages/product/Product';
import ContactUs from './pages/contact-us/ContactUs';
<<<<<<< HEAD
import DetailProduct from './pages/product/DetailProduct';
=======
import Account from './components/account/Account';
>>>>>>> 95d0221e29897b989059161290b13963eaa418a4

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
        <Route exact path="/contact-us">
            <ContactUs />
        </Route>
        <Route exact path="/product">
            <Product />
        </Route>
        <Route exact path="/product-detail">
          <DetailProduct/>
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/profile">
            <Account />
        </Route>
        <Route path="/sign-up">
            <SignUp />
        </Route>
      </Switch>
        
        
    </Router>
    </>
  );
}

export default App;
