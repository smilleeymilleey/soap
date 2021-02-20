import './App.css';
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <div className="App">
   
      <Home />
    
      <Switch>
     
       <Route path="\Users\Caitlyn Miley\soap\soap\soap\src\About.js" exact component={About}>

       </Route>

       <Route path="\Users\Caitlyn Miley\soap\soap\soap\src\Home.js" exact component={Home}>

      </Route>


      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
