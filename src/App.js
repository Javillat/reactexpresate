import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
