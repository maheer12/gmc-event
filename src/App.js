import { HashRouter as Router, Switch, Route,  } from "react-router-dom";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BreakpointProvider } from "react-socks";
function App() {
  return (
    <Router>
      <Switch>
        <BreakpointProvider>
          <Route path="/" exact>
            <Main />
          </Route>
        </BreakpointProvider>
      </Switch>
    </Router>
  );
}

export default App;
