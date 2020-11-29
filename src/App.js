import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SimpleTable from './components/SimpleTable';
import ReactWindowTable from './components/ReactWindowTable';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/simple">Simple table</Link>
              </li>
              <li>
                <Link to="/react-window">React Window table</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/react-window">
              <ReactWindowTable />
            </Route>
            <Route path="/simple">
              <SimpleTable />
            </Route>
            <Route path="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
