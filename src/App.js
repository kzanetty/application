import "./App.css";
import { Home } from "./pages/home";
import { Project } from "./pages/project";
import { Contact } from "./pages/contact";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
