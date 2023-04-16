import './App.css'
import ResponsiveAppBar from "./components/appbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error";
import Register from "./pages/Register";
import RegisterPage from "./pages/Register";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: HomePage(),
    errorElement: <ErrorPage/>
  },
  {
    path: "/home",
    element: HomePage(),
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: LoginPage(),
    errorElement: <ErrorPage/>
  },
  {
    path: "/register",
    element: RegisterPage(),
    errorElement: <ErrorPage/>
  },

]);
// {router.state.location.pathname}
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
