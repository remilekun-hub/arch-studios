import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Mainpages/Home';
import About from './Mainpages/About';
import Contact from './Mainpages/Contact';
import Portfolio from './Mainpages/Portfolio';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="wrapper">
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/portfolio">
              <Portfolio/>
            </Route>
            < Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
        <Footer/>
      </Router>
   </div>
  );
}

export default App;
