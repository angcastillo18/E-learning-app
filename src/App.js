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
import PrivateRoute from "./Components/PrivateRoute";
/* import { app } from "./firebase"; */

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <NavBar />

          <Switch>
            <PrivateRoute path='/user/mycourses' component={MyCourses} />
            <Route path='/courses' component={Courses} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/' component={Home} />
          </Switch>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
