import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/search">
            <h1>HEADING OF SEARCH PAGE</h1>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
