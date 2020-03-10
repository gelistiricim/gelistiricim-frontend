import React from 'react';
import ExampleComponent from "../../testcomponent/exampleComponent/ExampleComponent";
import ExampleComponentTwo from "../../testcomponent/exampleComponentTwo/exampleComponentTwo";
import './App.css';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
        Font Test
        <h1>React Boiler Plate</h1>
        <Switch>
            <Route exact path="/" component={ExampleComponent} />
            <Route exact path="/two" component={ExampleComponentTwo} />
        </Switch>
    </div>
  );
}

export default App;
