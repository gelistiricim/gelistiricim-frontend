import React from 'react';
import ExampleComponent from "../../components/testcomponent/exampleComponent/ExampleComponent";
import ExampleComponentTwo from "../../components/testcomponent/exampleComponentTwo/exampleComponentTwo";
import Index from "../Index/Index";
import './App.css';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/one" component={ExampleComponent} />
            <Route exact path="/two" component={ExampleComponentTwo} />
        </Switch>
    </div>
  );
}

export default App;
