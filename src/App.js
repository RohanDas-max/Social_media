import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/auth/Login.js";
import Logout from "./Components/auth/Logout.js";
import Signup from "./Components/auth/Signup.js";
import Main from "./Components/pages/Main.jsx";
import Post from "./Components/pages/Post.jsx";
import Profile from "./Components/pages/Profile.jsx";

function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Login} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
 
  );
}

export default App;
