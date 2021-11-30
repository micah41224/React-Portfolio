// import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import './App.css';
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Resume from "./components/Resume/resume";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
// import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";


const App = () => {
  return (
<Router>
  <Navbar/>
  <main>
    <Switch>
    <Route path="/about" exact>
      <About/>
    </Route>
     <Route path="/projects" exact>
      <Projects/>
    </Route>
     <Route path="/contact" exact>
      <Contact/>
    </Route>
     <Route path="/resume" exact>
      <Resume/>
    </Route>
    <Redirect to="/about" />
    </Switch>
  </main>
  <Footer/>
</Router>
  );
}

export default App;
