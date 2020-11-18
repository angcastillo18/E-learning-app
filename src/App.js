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
import { AuthProvider } from "./contexts/AuthContext";
import MyCourses from "./pages/MyCourses";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <NavBar />

          <Switch>
            <Route path='/user/mycourses'>
              <MyCourses />
            </Route>
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
      </AuthProvider>
    </Router>
  );
}

export default App;
