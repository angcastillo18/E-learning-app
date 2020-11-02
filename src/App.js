import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
//*router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//*Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path='/courses'>
            <Courses />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
