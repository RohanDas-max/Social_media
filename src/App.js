import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/Login.js";
import Logout from "./auth/Logout.js";
import Signup from "./auth/Signup.js";
import Main from "./pages/Main.jsx";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/main" component={Main} />
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
