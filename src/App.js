import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login.js";
import Logout from "./Components/auth/Logout.js";
import Signup from "./Components/auth/Signup.js";
import Main from "./Components/pages/Main.jsx";
import Profile from "./Components/pages/Profile.jsx";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
