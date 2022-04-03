// import "./components/static/css/App.css"
import "./App.css"
import Dashboard from "./components/views/DashBoard"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import $ from "jquery";

  
function App() {

  const [ user, setLoginUser] = useState({})
  const [Error404, setError404] = useState(false);
  return (
    <div className="App">
     {!Error404 && <div className="backgroundImage"> </div>}
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Dashboard setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
