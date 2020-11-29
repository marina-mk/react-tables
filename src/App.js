import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SimpleTable from "./components/SimpleTable";

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
            </ul>
          </nav>

          <Switch>
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
